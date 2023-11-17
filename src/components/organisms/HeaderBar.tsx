import { AppBar, Typography } from "@mui/material";
import { memo } from "react";

/**
 * `HeaderBar` コンポーネントは、アプリケーションのヘッダー部分を表示します。
 * このコンポーネントは固定位置のアプリバーに "TODOアプリ" というタイトルを表示します。
 *
 * @returns {JSX.Element} アプリケーションのヘッダーバー
 */

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
