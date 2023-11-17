import { memo } from "react";
import { Typography } from "@mui/material";

type NoTodosTextType = {
  message: string;
};

export const NoTodosText = memo(({ message }: NoTodosTextType) => {
  return <Typography sx={{ padding: 2 }}>{message}</Typography>;
});
