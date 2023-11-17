import { FormControl, TextField } from "@mui/material";
import React, { memo } from "react";

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
