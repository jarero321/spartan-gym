"use client"

import {useState} from "react";
import toast from "react-hot-toast";
import Loader from "@/app/components/Loader/Loader";
import { useSession, signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {Avatar, Button, CssBaseline, TextField, Box, Typography,Container} from '@mui/material/';

const defaultTheme = createTheme();

export default function SignInPage() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { status } = useSession();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const router = useRouter();

    const handleSignIn: SubmitHandler<FieldValues> = (data) => {
        setIsSubmitting(true);
        signIn("credentials", {
            ...data,
            redirect: false,
        }).then((callback) => {
            if (callback?.ok && callback?.error === undefined) {
                toast.success("Logged in successfully!");
                router.refresh();
            }

            if (callback?.error) {
                toast.error(callback.error);
            }
        }).finally(() => {
            setIsSubmitting(false)
        })
    };

    if (status === "loading") {
        return <Loader />;
    }

    if (status === "authenticated") {
        return redirect("/");
    }

    return (
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(handleSignIn)} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        {...register("email", {
                            required: "This field is required",
                        })}
                        error={!!errors?.email?.message}
                        helperText={
                            errors.email && typeof errors.email.message === "string"
                                ? errors.email.message
                                : null
                        }
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register("password", { required: "This field is required" })}
                        error={!!errors?.password?.message}
                        helperText={
                            errors.password && typeof errors.password.message === "string"
                                ? errors.password.message
                                : null
                        }
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {isSubmitting ? "Signing in..." : "Sign in"}
                    </Button>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
    );
}