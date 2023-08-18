"use client";

import Empty from "@/app/components/Empty";
import Loading from "@/app/loading";
import { CustomizedExercise } from "@/types";
import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import axios from "axios";
import useSWR from "swr";

const defaultTheme = createTheme();

const fetcher = async (...args: Parameters<typeof axios>) => {
  const res = await axios(...args);
  return res.data.data;
};

const MyExercisePage = () => {
  const { data, isLoading, error } = useSWR("/api/user/exercise", fetcher);

  if (error) {
    return (
      <Empty
        title={error.response.data.title || "Error"}
        subtitle={error.response.data.subTitle || "Something went wrong"}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box>
          <Typography component="h1" variant="h2">
            My Exercise
          </Typography>
        </Box>
        <Box sx={{
          mt: 3
        }}>
        <Grid container>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Sets</TableCell>
                    <TableCell>Steps</TableCell>
                    <TableCell>Kg</TableCell>
                    <TableCell>Rest Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody
                  sx={{
                    textAlign: "center",
                  }}
                >
                  {data.exercises.length > 0 &&
                    data?.exercises?.map((exercise: CustomizedExercise) => (
                      <TableRow key={exercise?.id}>
                        <TableCell>{exercise?.exerciseName}</TableCell>
                        <TableCell>{exercise?.sets}</TableCell>
                        <TableCell>{exercise?.steps}</TableCell>
                        <TableCell>{exercise?.kg}</TableCell>
                        <TableCell>{exercise?.rest}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default MyExercisePage;
