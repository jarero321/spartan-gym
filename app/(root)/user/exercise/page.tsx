"use client";

import WithUser from "@/app/hoc/withUser";
import { Box, Typography } from "@mui/material";

const MyExercisePage = () => {
  return (
    <Box>
      <Typography variant="h2">My Exercise</Typography>
    </Box>
  );
};

export default WithUser({ Component: MyExercisePage });
