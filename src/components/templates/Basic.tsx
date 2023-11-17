import { Container, Stack } from "@mui/material";
import React from "react";

type BasicType = {
  children: React.ReactNode;
};

export const Basic = ({ children }: BasicType) => {
  return (
    <Container
      maxWidth="sm"
      style={{
        padding: "200px 40px 40px",
        height: "100vh",
      }}
    >
      <Stack spacing={6}>{children}</Stack>
    </Container>
  );
};
