"use client";

import WithUser from "@/app/components/withUser";
import { Box, Typography } from "@mui/material";

const MyAttendancePage = () => {
  return (
    <Box>
      <Typography variant="h2">My Attendance</Typography>
    </Box>
  );
};

export default WithUser({ Component: MyAttendancePage });
