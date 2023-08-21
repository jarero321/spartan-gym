"use client"

import {
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
  Grid,
  FormControl,
  TextField, Button,
} from "@mui/material"
import Typography from "@mui/material/Typography";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

const defaultTheme = createTheme()



const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};
const AttendancePage: React.FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      fromTime: getCurrentTime(),
        toTime: getCurrentTime(),
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await axios.post("/api/attendance", data, {
        headers: {
          'Content-Type' : "application/json"
        }
      });

        console.log(res)

    } catch (err: Error | any ) {
      console.log(err)
    }

  }


  return <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="lg">
      <CssBaseline />

      <Box component={'form'}   noValidate
           onSubmit={handleSubmit(onSubmit)}
           sx={{ mt: 3 }}>

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                  type="time"
                  variant="outlined"
                  required
                  fullWidth
                  label={"From"}
                  autoFocus
                  {...register("fromTime", {required: true})}
                  helperText={
                    errors.fromTime && typeof errors.fromTime.message === "string"
                        ? errors.fromTime.message
                        : null
                  }
                  error={!!errors?.fromTime?.message}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                  type="time"
                  variant="outlined"
                  fullWidth
                  label={"To"}
                  autoFocus
                  {...register("toTime", {required: true})}
                  helperText={
                    errors.toTime && typeof errors.toTime.message === "string"
                        ? errors.toTime.message
                        : null
                  }
                  error={!!errors?.toTime?.message}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box sx={{mt: 3, display: "flex", justifyContent: "space-between"}}>
          <Button variant="contained" type={'submit'}>
            Create Attendance
          </Button>
          <Typography variant="body1">Hello world</Typography>
        </Box>
      </Box>
      </Box>

    </Container>
  </ThemeProvider>
}

export default AttendancePage;