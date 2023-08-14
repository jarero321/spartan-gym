"use client";

import { useEffect, useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Container,
  CssBaseline,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import useStudentsStore from "@/app/hooks/useStudentsStore";
import useFoodStore from "@/app/hooks/useFoodStore";

import { User } from "@prisma/client";

import { LoadingButton } from "@mui/lab";
import { PuffLoader } from "react-spinners";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "@/app/components/Loader/Loader";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const defaultTheme = createTheme();

export default function AssignDiet() {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [assignLoading, setAssignLoading] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState<string>(new Date().toISOString());
  const [toDate, setToDate] = useState<string>(new Date().toISOString());

  const { students, loading, fetchStudents } = useStudentsStore();
  const { foods, fetchFoods, loading: foodLoading } = useFoodStore();

  useEffect(() => {
    fetchStudents();
    fetchFoods();
  }, [fetchStudents, fetchFoods]);

  const handleChange = (event: SelectChangeEvent<typeof selectedStudents>) => {
    const {
      target: { value },
    } = event;

    const selectedArray = Array.isArray(value) ? value : [value];

    setSelectedStudents(selectedArray);
  };

  const assignDiet = async () => {
    setAssignLoading(true);

    try {
    } catch (err: Error | any) {
      console.log(err);
      toast.error(err.response.data.error);
    } finally {
      setAssignLoading(false);
      setSelectedStudents([]);
      setFromDate(new Date().toISOString());
      setToDate(new Date().toISOString());
    }
  };

  if (loading || foodLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Assign Diet</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">
                  Students
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={selectedStudents}
                  onChange={handleChange}
                  input={<OutlinedInput label="Students" />}
                  renderValue={(selected) =>
                    selected
                      .map(
                        (studentId) =>
                          students.find((student) => student.id === studentId)
                            ?.name
                      )
                      .join(", ")
                  }
                  MenuProps={MenuProps}
                >
                  {students.map((student: User) => (
                    <MenuItem key={student.id} value={student.id}>
                      <Checkbox
                        checked={selectedStudents.includes(student.id)}
                      />
                      <ListItemText primary={student.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
