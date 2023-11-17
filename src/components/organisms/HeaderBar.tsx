import { AppBar, Typography } from "@mui/material";
import { memo } from "react";

export const HeaderBar = memo(() => {
  return (
    <>
      <AppBar position="fixed" sx={{ flexGrow: 1, padding: "20px" }}>
        <Typography
          variant="h1"
          align="justify"
          sx={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
        >
          TODOアプリ
        </Typography>
      </AppBar>
    </>
  );
});
