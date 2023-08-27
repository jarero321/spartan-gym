"use client"
import {Grid, Typography, Container, Select, Box} from "@mui/material";
import {User} from "@prisma/client";
import useSWR from "swr";
import axios from "axios";
import Loader from "@/app/components/Loader/Loader";
import AppWidgetSummary from "@/app/components/AppWidgetSummary/AppWidgetSummary";

import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import {handleActiveStatus} from "@/utils";
import AttendancesGraph from "@/app/components/AdminTrainerDashboard/AttendancesGraph";

const fetcher = async (...args: Parameters<typeof axios>) => {
    const res = await axios(...args);
    return res.data;
}

const AdminTrainerDashboard = ({user}: { user: User }) => {
    const {data: fees, isLoading: feesLoading} = useSWR("/api/fees", fetcher)
    const {data: users, isLoading: usersLoading, mutate} = useSWR("/api/users", fetcher)
    const { data: attendances, isLoading: attendancesLoading } = useSWR("/api/attendance", fetcher);

    if (feesLoading || usersLoading || attendancesLoading) {
        return <Loader/>
    }

    return (
        <Container maxWidth="xl">
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 5
            }}>

            <Typography variant="h4">
                Hi, Welcome back <br/>
                <Box component={'span'}>
                    {user.name}
                </Box>
            </Typography>
            <Select
                value={user.isActive ? "online" : "offline"}
                onChange={(event) => handleActiveStatus(event.target.value, mutate)}
                displayEmpty
            >
                <MenuItem value={"online"}>
                    🟢 Online
                </MenuItem>
                <MenuItem value={"offline"}>
                    🔴 Offline
                </MenuItem>
            </Select>
            </Box>

            <Grid container spacing={3}>
                {user.role === "admin" && <>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Income" total={"$" + fees.income ? fees.income : 0} color={'primary'}
                                          icon={<AttachMoneyIcon />}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Unpaid" total={"$" + fees.unpaid ? fees.unpaid : 0} color="warning"
                                          icon={<AttachMoneyIcon />}/>
                    </Grid>
                </>}

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Active Now" total={`${users.onlineUsers ? users.onlineUsers : 0}`} color="info"
                                      icon={<PeopleIcon />}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Students" total={`${users.students ? users?.students : 0}`} color="warning"
                                      icon={<PeopleIcon />}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Users" total={`${users.count ? users.count : 0}`} color="error" icon={<PeopleIcon />}/>
                </Grid>
            </Grid>

            <AttendancesGraph  attendanceData={attendances?.data}/>
        </Container>
    )
}

export default AdminTrainerDashboard;


// last 5 payment
