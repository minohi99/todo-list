import { Box, Stack } from "@mui/material";
import React, { memo } from "react";

/**
 * `TodoBox` コンポーネントは、TODOアイテムを包括する汎用的なコンテナです。
 * このコンポーネントは、背景色や子要素のレイアウトをカスタマイズするために使用されます。
 * 状態に応じて、子要素はスタックレイアウトまたは標準レイアウトで表示されます。
 *
 * @param {Object} props - コンポーネントのプロップス
 * @param {React.ReactNode} props.children - コンポーネントに含まれる子要素
 * @param {string} props.bgColor - ボックスの背景色
 * @param {"add" | "complete" | "incomplete"} props.status - TODOアイテムの状態
 * @returns {JSX.Element} スタイルが適用されたボックスコンテナ
 */

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
