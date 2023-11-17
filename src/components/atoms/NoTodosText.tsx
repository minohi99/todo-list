import { memo } from "react";
import { Typography } from "@mui/material";

/**
 * `NoTodosText` コンポーネントは、TODOリストが空の場合に表示するメッセージを提供します。
 *
 * @param {Object} props - コンポーネントのプロップス
 * @param {string} props.message - 表示するメッセージ
 * @returns {JSX.Element} メッセージを含む Typography コンポーネント
 */
type NoTodosTextType = {
  message: string;
};

export const NoTodosText = memo(({ message }: NoTodosTextType) => {
  return <Typography sx={{ padding: 2 }}>{message}</Typography>;
});
