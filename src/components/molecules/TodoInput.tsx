import { Stack } from "@mui/material";
import { TodoInputFiled } from "../atoms/TodoInputFiled";
import { TodoAddButton } from "../atoms/TodoAddButton";
import React, { memo } from "react";

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
