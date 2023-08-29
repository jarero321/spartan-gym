"use client";

import {
    Container,
    Grid,
    ThemeProvider,
    createTheme,
    TableCell,
    TableBody,
    TableRow,
    Table,
    TableContainer,
    Paper, Skeleton
} from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import Loader from "@/app/components/Loader/Loader"
import Empty from "@/app/components/Empty"
import Image from "next/image";


const defaultTheme = createTheme();

const fetcher = async (...args: Parameters<typeof axios>) => {
    const res = await axios(...args);
    return res.data
}
export default function ProfilePage() {
    const {data, isLoading, error} = useSWR('/api/user/profile', fetcher);


    if (error) {
        return <Empty title={'Error'} subtitle={"Something went wrong."}/>
    }

    if (isLoading) {
        return <Loader/>
    }

    const user = data?.data;

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        {/* Use Next.js Image component */}
                        {!user.image ? <Skeleton
                                animation="wave"
                                variant="rounded"
                                sx={{
                                    width: "100%",
                                    height: {
                                        xs: 200,
                                        sm: 300,
                                    },
                                }}
                            /> :
                            <Image
                                src={user?.image || ""}
                                alt={user.name}
                                layout="responsive" // Make the image responsive
                                width={400}
                                height={300}
                                loading="lazy"
                                style={{
                                    borderRadius: "13px",
                                    width: "100%",
                                }}
                            />}
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        mt: {xs: 3, md: 0}
                    }}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>

                                {user.name && <TableRow sx={{textAlign: "center"}}>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                </TableRow>}
                                {user.email && <TableRow sx={{textAlign: "center"}}>
                                    <TableCell>Email</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>}
                                {user.role && <TableRow sx={{textAlign: "center"}}>
                                    <TableCell>Role</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                </TableRow>}
                                {user.gender && <TableRow sx={{textAlign: "center"}}>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>{user?.gender}</TableCell>
                                </TableRow>}

                                    <TableRow>
                                        <TableCell>Age</TableCell>
                                        <TableCell>{user?.age ?? 18} years</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>Weight</TableCell>
                                        <TableCell>{user?.weight ?? 40} kg</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>Height</TableCell>
                                        <TableCell>{user?.height ?? 100} cm</TableCell>
                                    </TableRow>


                                    {user.goal && <TableRow sx={{textAlign: "center"}}>
                                        <TableCell>Goal</TableCell>
                                        <TableCell sx={{
                                            textTransform: "capitalize"
                                        }}>{user.goal.split("_").join(" ")}</TableCell>
                                    </TableRow>}
                                    {user.level && <TableRow sx={{textAlign: "center"}}>
                                        <TableCell>Level</TableCell>
                                        <TableCell sx={{
                                            textTransform: "capitalize"
                                        }}>{user.level}</TableCell>
                                    </TableRow>}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
