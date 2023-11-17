import { Typography } from "@mui/material";
import React from "react";

type PrimaryHeadingType = {
  children: React.ReactNode;
};

export const PrimaryHeading = ({ children }: PrimaryHeadingType) => {
  return <Typography variant="h5">{children}</Typography>;
};
