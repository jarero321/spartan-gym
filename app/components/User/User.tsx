"use client";

import {
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  Paper,
} from "@mui/material";
import { User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Divider from "@mui/material/Divider";

const defaultTheme = createTheme();

export default function UserClient({ user }: { user: User }) {
  const router = useRouter();

  console.log(user)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {/* Use Next.js Image component */}
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
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{
            mt: {xs : 3, md: 0}
          }}>
            <TableContainer component={Paper}>
              <Table>
                {user.name && <TableRow sx={{textAlign: "center"}}>
                  <TableCell>Name</TableCell>
                  <TableCell>{user.name}</TableCell>
                </TableRow>}
                 {user.email && <TableRow sx={{ textAlign: "center" }}>
                   <TableCell>Email</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>}
                 {user.role && <TableRow sx={{ textAlign: "center" }}>
                   <TableCell>Role</TableCell>
                  <TableCell>{user.role}</TableCell>
                </TableRow>}
                {user.gender && <TableRow sx={{ textAlign: "center" }}>
                  <TableCell>Gender</TableCell>
                  <TableCell>{user.gender}</TableCell>
                </TableRow>}
                 {user.weight &&
                     <TableRow sx={{ textAlign: "center" }}>
                       <TableCell>Weight</TableCell>
                       <TableCell>{user.weight}</TableCell>
                     </TableRow>
                 }
                 {user.height && <TableRow sx={{ textAlign: "center" }}>
                   <TableCell>Height</TableCell>
                  <TableCell>{user.height}</TableCell>
                </TableRow>}
                 {user.age && <TableRow sx={{ textAlign: "center" }}>
                   <TableCell>Age</TableCell>
                  <TableCell>{user.age}</TableCell>
                </TableRow>}
                 {user.goal && <TableRow sx={{ textAlign: "center" }}>
                   <TableCell>Goal</TableCell>
                  <TableCell>{user.goal}</TableCell>
              </TableRow>}
                 {user.level && <TableRow sx={{ textAlign: "center" }}>
                   <TableCell>Level</TableCell>
                  <TableCell>{user.level}</TableCell>
                </TableRow>}
              </Table>
            </TableContainer>

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
