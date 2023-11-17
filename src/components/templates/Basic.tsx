import { Container, Stack } from "@mui/material";
import React from "react";

/**
 * `Basic` コンポーネントは、アプリケーションの基本的なレイアウト構造を提供します。
 * このコンポーネントは、指定された子要素を含むスタックレイアウト内のコンテナです。
 * 主にページやセクションの基盤として使用されます。
 *
 * @param {Object} props - コンポーネントのプロップス
 * @param {React.ReactNode} props.children - コンポーネントに含まれる子要素
 * @returns {JSX.Element} スタイルが適用されたコンテナ要素
 */

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
