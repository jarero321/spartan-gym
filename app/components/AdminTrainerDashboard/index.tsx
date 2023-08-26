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

const fetcher = async (...args: Parameters<typeof axios>) => {
    const res = await axios(...args);
    return res.data;
}

const AdminTrainerDashboard = ({user}: { user: User }) => {
    const {data: fees, isLoading: feesLoading} = useSWR("/api/fees", fetcher)
    const {data: users, isLoading: usersLoading, mutate} = useSWR("/api/users", fetcher)


    console.log(fees)





    if (feesLoading || usersLoading) {
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
                        <AppWidgetSummary title="Income" total={"$" + fees.income} color={'primary'}
                                          icon={<AttachMoneyIcon sx={{
                                              fontSize: {
                                                  xs: "large",
                                                  md: 40
                                              }
                                          }}/>}/>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <AppWidgetSummary title="Unpaid" total={"$" + fees.unpaid} color="warning"
                                          icon={<AttachMoneyIcon sx={{
                                              fontSize: {
                                                  xs: "large",
                                                  md: 40
                                              }
                                          }}/>}/>
                    </Grid>
                </>}

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Active Now" total={`${users?.onlineUsers}`} color="info"
                                      icon={<PeopleIcon
                                          sx={{
                                              fontSize: {
                                                  xs: "large",
                                                  md: 40
                                              }
                                          }}/>}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Students" total={`${users?.students}`} color="warning"
                                      icon={<PeopleIcon sx={{
                                          fontSize: {
                                              xs: "large",
                                              md: 40
                                          }
                                      }}/>}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <AppWidgetSummary title="Users" total={`${users.count}`} color="error" icon={<PeopleIcon sx={{
                        fontSize: {
                            xs: "medium",
                            sm: "large",
                            md: 40
                        }
                    }}/>}/>
                </Grid>
            </Grid>
        </Container>
    )
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

//
// <Grid container spacing={4}>
//     <Grid item xs={12} md={6} sx={{
//         border: "1px solid #ccc",
//     }}>
//         <Typography variant="h6">
//             Last 5 Payments
//         </Typography>
//         <List component="div" aria-label="secondary mailbox folder">
//             {fees?.fees.filter((fee: Fees) => fee.isPaid).sort((a: Fees, b: Fees) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())?.map((fee: Fees) => (
//                 <ListItem key={fee.id}>
//                     <ListItemButton>
//                         <ListItemText primary={fee.message}/>
//                     </ListItemButton>
//                 </ListItem>
//             ))}
//         </List>
//     </Grid>
//     <Grid item xs={12} md={6}>
//         <Box sx={{ border: "1px solid #ccc" }}>
//             <Typography variant="h6">
//                 Summary
//             </Typography>
//             <Typography>
//                 Completed Amount: $5000
//             </Typography>
//             <Typography>
//                 Unpaid Payments: $2000
//             </Typography>
//         </Box>
//     </Grid>
//     <Grid item xs={12} sm={6} md={3} sx={{
//         border: "1px solid #ccc",
//     }}>
//         <Typography variant={'h6'}>
//             Active Users {users?.onlineUsers}
//         </Typography>
//
//     </Grid>
//
//     <Grid item xs={12} sm={6} md={3} sx={{
//         border: "1px solid #ccc",
//     }}>
//
//         <Typography variant={'h6'}>
//             All Users {users?.count}
//         </Typography>
//
//     </Grid>
//     <Grid item xs={12} sm={6} md={3} sx={{
//         border: "1px solid #ccc",
//     }}>
//
//         <Typography variant={'h6'}>
//             Students {users?.students}
//         </Typography>
//
//     </Grid>
//     <Grid item xs={12} sm={6} md={3} sx={{
//         border: "1px solid #ccc",
//     }}>
//
//         <Typography variant={'h6'}>
//             Trainers {users?.trainers}
//         </Typography>
//     </Grid>
//     <Grid item xs={12} md={6}>
//
//     </Grid>
// </Grid>