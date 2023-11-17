import { FormControl, TextField } from "@mui/material";
import React, { memo } from "react";

/**
 * `TodoInputFiled` コンポーネントは、TODOリストへのテキスト入力フィールドを提供します。
 * このフィールドは、ユーザーが新しいTODO項目のテキストを入力するために使用されます。
 *
 * @param {Object} props - コンポーネントのプロップス
 * @param {string} props.todoPlaceholder - テキストフィールドのプレースホルダーテキスト
 * @param {string} props.todoText - テキストフィールドの現在の値
 * @param {React.ChangeEventHandler<HTMLInputElement>} props.onChangeText - テキストフィールドの値が変更された際に呼び出される関数
 * @returns {JSX.Element} TODOテキスト入力用のフィールド
 */
type TodoInputFiledTypes = {
  todoPlaceholder: string;
  todoText: string;
  onChangeText: React.ChangeEventHandler<HTMLInputElement>;
};

export const TodoInputFiled = memo((props: TodoInputFiledTypes) => {
  const { todoPlaceholder, todoText, onChangeText } = props;

  return (
    <FormControl fullWidth>
      <TextField
        sx={{
          backgroundColor: "#ffffff",
        }}
        placeholder={todoPlaceholder}
        value={todoText}
        onChange={onChangeText}
      />
    </FormControl>
  );
});
