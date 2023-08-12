"use client";

import {
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const defaultTheme = createTheme();

export default function UserClient({ user }: { user: User }) {
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const router = useRouter();

  const handleDelete = () => {
    // Add your delete logic here
  };

  const handleMessage = () => {
    // Add your message logic here
    setMessageSent(true);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {/* Use Next.js Image component */}
            <Image
              src={user?.image || ""}
              alt={user.name}
              width={400}
              height={300}
              loading="lazy"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4">{user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            {/* Display other user information here */}
            {messageSent ? (
              <Button variant="contained" color="primary" disabled>
                Message Sent
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                onClick={handleMessage}
              >
                Message
              </Button>
            )}
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="success"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </Container>
    </ThemeProvider>
  );
}
