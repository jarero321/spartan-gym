"use client";

import useStudentsStore from "@/app/hooks/useStudentsStore";
import Loading from "@/app/loading";
import { LoadingButton } from "@mui/lab";
import {
  Autocomplete,
  Box,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  TextareaAutosize,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { User } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const defaultTheme = createTheme();

const MONTHS = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];
// 2021 - 2099
const YEARS = Array.from({ length: 79 }, (_, i) => i + 2021);
const YEAR_OBJECTS = YEARS.map((year, index) => ({
  id: index + 1,
  name: year,
}));

export default function FeesPage() {
  const { students, fetchStudents } = useStudentsStore();

  // State variables for storing selected values
  const [selected, setSelected] = useState<User | null>(null);
  const [selectedMonth, setSelectedMonth] = useState(MONTHS[0]);
  const [selectedYear, setSelectedYear] = useState(YEAR_OBJECTS[0]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      amount: 0,
      message: "",
      month: "",
      year: 0,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);

    return;
    try {
      const res = await axios.post("/api/fees", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
    } catch (err: Error | any) {
      toast.error(err.response.data.error);
    }
  };

  if (!students) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {/* Autocomplete for selecting a person */}
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={selected}
                onChange={(event, newValue) => {
                  setSelected(newValue);
                }}
                options={students || []}
                getOptionLabel={(person) => person?.email || ""}
                renderOption={(props, person) => (
                  <li {...props} key={person.id}>
                    {person.email}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select a person"
                    placeholder="Select a person"
                    required
                    fullWidth
                    {...register("email", { required: true })}
                    error={!!errors?.email?.message}
                    helperText={
                      errors.email && typeof errors.email.message === "string"
                        ? errors.email.message
                        : null
                    }
                  />
                )}
              />
            </Grid>
            {/* month */}
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={selectedMonth}
                onChange={(event, newValue) =>
                  newValue && setSelectedMonth(newValue)
                }
                options={MONTHS || []}
                getOptionLabel={(month) => month.name}
                renderOption={(props, month) => (
                  <li {...props} key={month.id}>
                    {month.name}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select a month"
                    placeholder="Select a month"
                    required
                    fullWidth
                    {...register("month", { required: true })}
                    error={!!errors?.month?.message}
                    helperText={
                      errors.month && typeof errors.month.message === "string"
                        ? errors.month.message
                        : null
                    }
                  />
                )}
              />
            </Grid>
            {/* Years */}
            <Grid item xs={12} sm={6}>
              <Autocomplete
                value={selectedYear}
                onChange={(event, newValue) =>
                  newValue && setSelectedYear(newValue)
                }
                options={YEAR_OBJECTS || []}
                getOptionLabel={(year) => year.name}
                renderOption={(props, year) => (
                  <li {...props} key={year.id}>
                    {year.name}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    type="text"
                    label="Select a year"
                    placeholder="Select a year"
                    required
                    fullWidth
                    {...register("year", {
                      required: true,
                      validate: {
                        positive: (value) =>
                          value > 0 || "Year must be positive",
                      },
                    })}
                    error={!!errors?.year?.message}
                    helperText={
                      errors.year && typeof errors.year.message === "string"
                        ? errors.year.message
                        : null
                    }
                  />
                )}
              />
            </Grid>
            {/* amount */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Amount"
                placeholder="Enter the amount"
                defaultValue={0}
                required
                fullWidth
                {...register("amount", {
                  required: true,
                  valueAsNumber: true,
                  validate: {
                    positive: (value) =>
                      value > 0 || "Amount must be positive or Greater than 0",
                  },
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: "Amount must be a number",
                  },
                })}
                error={!!errors?.amount?.message}
                helperText={
                  errors.amount && typeof errors.amount.message === "string"
                    ? errors.amount.message
                    : null
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                {...register("message", {
                  required: true,
                })}
                placeholder="Type your message here"
                style={{
                  width: "100%",
                  resize: "none",
                  fontSize: "16px",
                  lineHeight: "1.5",
                  padding: "12px",
                  background: "#fff",
                  border: "1px solid #d0d7de",
                  borderRadius: "5px",
                  boxShadow: "0px 2px 2px #f6f8fa",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                type="submit"
                fullWidth
                // loading={isSubmitting}
                // loadingIndicator="Adding Fee"
                variant="contained"
              >
                Add Fee
              </LoadingButton>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
