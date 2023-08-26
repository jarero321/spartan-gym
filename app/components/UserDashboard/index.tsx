"use client"
import {Box, Select, Typography, Container, MenuItem, Grid} from "@mui/material"
import {User} from "@prisma/client";
import useSWR from "swr";
import axios from "axios";
import {handleActiveStatus} from "@/utils";
import React from "react";


const fetcher = async (...args: Parameters<typeof axios>) => {
    const res = await axios(...args);
    return res.data;
}
const UserDashboard = ({user} : {user: User}) => {
    return <Container maxWidth="xl">
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
                value={user?.isActive ? "online" : "offline"}
                onChange={(event) => handleActiveStatus(event.target.value)}
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
    </Container>
}

export default UserDashboard;