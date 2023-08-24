"use client"
import {
    Box, Grid, List, ListItem,
    ListItemText
} from "@mui/material";
import {Fees, User} from "@prisma/client";
import useSWR from "swr";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Loader from "@/app/components/Loader/Loader";
import {Fragment} from "react";
import ListItemButton from "@mui/material/ListItemButton";

const fetcher = async (...args: Parameters<typeof axios>) => {
    const res = await axios(...args);
    return res.data;
}

const AdminTrainerDashboard = ({user}: { user: User }) => {
    const {data: fees, isLoading: feesLoading} = useSWR("/api/fees", fetcher)
    const {data: users, isLoading: usersLoading} = useSWR("/api/users", fetcher)


    console.log(fees)


    if (feesLoading || usersLoading) {
        return <Loader/>
    }

    return <Box>
        <Grid container spacing={4}>
            <Grid item xs={12} md={6} sx={{
                border: "1px solid #ccc",
            }}>
                <Typography>
                    Last 5 Payment
                </Typography>
                <List component="div" aria-label="secondary mailbox folder">
                    {fees?.fees.filter((fee: Fees) => fee.isPaid).sort((a: Fees, b: Fees) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())?.map((fee: Fees) => (
                        <ListItem key={fee.id}>
                            <ListItemButton>
                                <ListItemText primary={fee.message}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item xs={12} md={6}>
               <Box>
               </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{
                border: "1px solid #ccc",
            }}>
                <Typography variant={'h6'}>
                    Active Users {users?.onlineUsers}
                </Typography>

            </Grid>

            <Grid item xs={12} sm={6} md={3} sx={{
                border: "1px solid #ccc",
            }}>

                <Typography variant={'h6'}>
                    All Users {users?.count}
                </Typography>

            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{
                border: "1px solid #ccc",
            }}>

                <Typography variant={'h6'}>
                    Students {users?.students}
                </Typography>

            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{
                border: "1px solid #ccc",
            }}>

                <Typography variant={'h6'}>
                    Trainers {users?.trainers}
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>

            </Grid>
        </Grid>
    </Box>
}

export default AdminTrainerDashboard;


// last 5 payment
// all trainer
// diet control
// exercise control
// attendance control
//
// paid payment
// unpaid payment