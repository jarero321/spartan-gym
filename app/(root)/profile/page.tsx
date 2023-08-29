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
    Paper, Skeleton, Box, MenuItem, Select
} from "@mui/material";
import axios from "axios";
import useSWR from "swr";
import Loader from "@/app/components/Loader/Loader"
import Empty from "@/app/components/Empty"
import Image from "next/image";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {TextField} from "@mui/material/";
import {LoadingButton} from "@mui/lab";


const defaultTheme = createTheme();

const fetcher = async (...args: Parameters<typeof axios>) => {
    const res = await axios(...args);
    return res.data
}
export default function ProfilePage() {
    const {data, isLoading, error} = useSWR('/api/user/profile', fetcher);

    const user = data?.data;

    const {
        register,
        // watch,
        // setValue,
        // reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FieldValues & { age: number; weight: number; height: number }>({
        defaultValues: {
            name: user?.name,
            image: user?.image ?? "",
            age: user?.age ?? 18,
            weight: user?.weight ?? 50,
            height: user?.height ?? 150,
            goal: user?.goal ?? "",
            level: user?.level ?? "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const res = await axios.patch('/api/users', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res)
        } catch (err: Error | any) {
            console.log(err)
        }

    }


    if (error) {
        return <Empty title={'Error'} subtitle={"Something went wrong."}/>
    }

    if (isLoading) {
        return <Loader/>
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
                <Box component={'form'} noValidate
                     onSubmit={handleSubmit(onSubmit)}
                     sx={{ mt: 3 }}
                >
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
                                    <TableCell>
                                        <TextField
                                            size={"small"}
                                            required
                                            fullWidth
                                            id="name"
                                            autoComplete="name"
                                            defaultValue={user.name}
                                            autoFocus
                                            {...register("name", {
                                                required: "This field is required",
                                            })}
                                            error={!!errors?.name?.message}
                                            helperText={
                                                errors.name && typeof errors.name.message === "string"
                                                    ? errors.name.message
                                                    : null
                                            }
                                        />
                                    </TableCell>
                                </TableRow>}
                                {user.email && <TableRow sx={{textAlign: "center"}}>
                                    <TableCell>Email</TableCell>
                                    <TableCell>
                                        {user?.email}
                                    </TableCell>
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
                                        <TableCell>
                                            <TextField
                                                size={"small"}
                                                defaultValue={user?.age ?? 18}
                                                type="number"
                                                autoComplete="age"
                                                required
                                                fullWidth
                                                min={18}
                                                id="age"
                                                autoFocus
                                                {...register("age", {
                                                    required: true,
                                                    min: {
                                                        value: 18,
                                                        message: "Age must be greater than 18",
                                                    },
                                                    pattern: {
                                                        value: /^[0-9]+$/,
                                                        message: "Age must be a number",
                                                    },
                                                    setValueAs: (value) => parseInt(value),
                                                })}
                                                helperText={
                                                    errors.age && typeof errors.age.message === "string"
                                                        ? errors.age.message
                                                        : null
                                                }
                                                error={!!errors?.age?.message}
                                            />
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>Weight(k.g.)</TableCell>
                                        <TableCell>
                                            <TextField
                                                size={"small"}
                                                defaultValue={user?.weight ?? 50}
                                                type="number"
                                                autoComplete="weight"
                                                required
                                                fullWidth
                                                id="weight"
                                                autoFocus
                                                {...register("weight", {
                                                    required: true,
                                                    min: {
                                                        value: 0,
                                                        message: "Weight must be greater than 0",
                                                    },
                                                    pattern: {
                                                        value: /^[0-9]+$/,
                                                        message: "Weight must be a number",
                                                    },
                                                    setValueAs: (value) => parseInt(value),
                                                })}
                                                helperText={
                                                    errors.weight && typeof errors.weight.message === "string"
                                                        ? errors.weight.message
                                                        : null
                                                }
                                                error={!!errors?.weight?.message}
                                            />
                                        </TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>Height(c.m)</TableCell>
                                        <TableCell>
                                            <TextField
                                                size={"small"}
                                                defaultValue={user?.height ?? 150}
                                                type="number"
                                                autoComplete="height"
                                                required
                                                fullWidth
                                                min={0}
                                                label=""
                                                autoFocus
                                                {...register("height", {
                                                    required: true,
                                                    min: {
                                                        value: 0,
                                                        message: "Height must be greater than 0",
                                                    },
                                                    pattern: {
                                                        value: /^[0-9]+$/,
                                                        message: "Height must be a number",
                                                    },
                                                    setValueAs: (value) => parseInt(value),
                                                })}
                                                helperText={
                                                    errors.height && typeof errors.height.message === "string"
                                                        ? errors.height.message
                                                        : null
                                                }
                                                error={!!errors?.height?.message}
                                            />
                                        </TableCell>
                                    </TableRow>


                                    {user.goal && <TableRow sx={{textAlign: "center"}}>
                                        <TableCell>Goal</TableCell>
                                        <TableCell sx={{
                                            textTransform: "capitalize"
                                        }}>
                                            <Select
                                                size={'small'}
                                                fullWidth
                                                autoFocus
                                                required
                                                defaultValue={user.goal ?? 'gain_weight'}
                                                {...register("goal", {
                                                    required: true,
                                                })}
                                                displayEmpty
                                            >
                                                <MenuItem value="gain_weight">Gain Weight</MenuItem>
                                                <MenuItem value="lose_weight">Lose Weight</MenuItem>
                                                <MenuItem value="get_fitter">Get Fitter</MenuItem>
                                                <MenuItem value="get_stronger">Get Stronger</MenuItem>
                                                <MenuItem value="get_healthier">Get Healthier</MenuItem>
                                                <MenuItem value="get_more_flexible">Get More Flexible</MenuItem>
                                                <MenuItem value="get_more_muscular">Get More Muscular</MenuItem>
                                                <MenuItem value="learn_the_basics">Learn The Basics</MenuItem>
                                            </Select>
                                        </TableCell>
                                    </TableRow>}
                                    {user.level && <TableRow sx={{textAlign: "center"}}>
                                        <TableCell>Level</TableCell>
                                        <TableCell sx={{
                                            textTransform: "capitalize"
                                        }}>
                                            <Select
                                                size={'small'}
                                                fullWidth
                                                autoFocus
                                                required
                                                defaultValue={user.level ?? "beginner"}
                                                {...register("level", {
                                                    required: true,
                                                })}
                                                displayEmpty
                                            >
                                                <MenuItem value="beginner">Beginner</MenuItem>
                                                <MenuItem value="intermediate">Intermediate</MenuItem>
                                                <MenuItem value="advanced">Advanced</MenuItem>
                                                <MenuItem value="expert">Expert</MenuItem>
                                                <MenuItem value="professional">Professional</MenuItem>
                                            </Select>
                                        </TableCell>
                                    </TableRow>}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <LoadingButton
                            type="submit"
                            loading={isSubmitting}
                            loadingIndicator="Saving Update"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Save
                        </LoadingButton>
                    </Grid>
                </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
