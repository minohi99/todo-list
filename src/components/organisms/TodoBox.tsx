import { Box, Stack } from "@mui/material";
import React, { memo } from "react";

type TodoBoxType = {
  children: React.ReactNode;
  bgColor: string;
  status: "add" | "complete" | "incomplete";
};

export const TodoBox = memo(({ children, bgColor, status }: TodoBoxType) => {
  return (
    <Box
      style={{
        borderRadius: 8,
        padding: 20,
        background: bgColor,
      }}
    >
      {status === "add" ? <Stack spacing={1}>{children}</Stack> : children}
    </Box>
  );
});
