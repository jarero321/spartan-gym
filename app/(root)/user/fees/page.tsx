"use client";

import WithUser from "@/app/components/withUser";
import { Box, Typography } from "@mui/material";

const MyFeesPage = () => {
  return (
    <Box>
      <Typography variant="h2">My Fees</Typography>
    </Box>
  );
};

export default WithUser({ Component: MyFeesPage });
