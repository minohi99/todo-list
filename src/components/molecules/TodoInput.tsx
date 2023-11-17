import { Stack } from "@mui/material";
import { TodoInputFiled } from "../atoms/TodoInputFiled";
import { TodoAddButton } from "../atoms/TodoAddButton";
import React, { memo } from "react";

/**
 * `TodoInput` コンポーネントは、テキスト入力フィールドと追加ボタンを組み合わせたコンポーネントです。
 * このコンポーネントを使用して、ユーザーは新しいTODOアイテムを入力し、リストに追加することができます。
 *
 * @param {Object} props - コンポーネントのプロップス
 * @param {string} props.todoPlaceholder - テキストフィールドのプレースホルダーテキスト
 * @param {string} props.todoText - テキストフィールドの現在の値
 * @param {React.ChangeEventHandler<HTMLInputElement>} props.onChangeText - テキストフィールドの値が変更された際に呼び出される関数
 * @param {() => void} props.onClickAdd - 追加ボタンがクリックされた時に実行される関数
 * @returns {JSX.Element} テキスト入力と追加ボタンを含むスタックコンポーネント
 */

type TodoInputType = {
  todoPlaceholder: string;
  todoText: string;
  onChangeText: React.ChangeEventHandler<HTMLInputElement>;
  onClickAdd: () => void;
};

export const TodoInput = memo(
  ({ todoPlaceholder, todoText, onChangeText, onClickAdd }: TodoInputType) => {
    return (
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        alignItems="center"
      >
        <TodoInputFiled
          todoPlaceholder={todoPlaceholder}
          todoText={todoText}
          onChangeText={onChangeText}
        />
        <TodoAddButton onClickAdd={onClickAdd} todoText={todoText} />
      </Stack>
    );
  }
);
