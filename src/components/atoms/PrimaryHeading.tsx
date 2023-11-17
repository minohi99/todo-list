import { Typography } from "@mui/material";
import React, { memo } from "react";

/**
 * `PrimaryHeading` コンポーネントは、画面やセクションの主要な見出しを表示するために使用されます。
 * このコンポーネントは `Typography` コンポーネントを使用し、`h5` のバリアントスタイルを適用します。
 *
 * @param {Object} props - コンポーネントのプロップス
 * @param {React.ReactNode} props.children - 見出しに表示するコンテンツ
 * @returns {JSX.Element} 見出しを含む Typography コンポーネント
 */
type PrimaryHeadingType = {
  children: React.ReactNode;
};

export const PrimaryHeading = memo(({ children }: PrimaryHeadingType) => {
  return <Typography variant="h5">{children}</Typography>;
});
