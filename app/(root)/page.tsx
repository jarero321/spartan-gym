"use client";

import { Box, Typography } from "@mui/material/";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (status === "unauthenticated") return <p>Access Denied</p>;

  return (
    <Box>
      <Typography variant="h2">
        Dashboard
      </Typography>
        {data?.user?.email}
    </Box>
  );
}
