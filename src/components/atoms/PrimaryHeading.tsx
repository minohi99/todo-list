import { Typography } from "@mui/material";
import React, { memo } from "react";

type PrimaryHeadingType = {
  children: React.ReactNode;
};

export const PrimaryHeading = memo(({ children }: PrimaryHeadingType) => {
  return <Typography variant="h5">{children}</Typography>;
});
