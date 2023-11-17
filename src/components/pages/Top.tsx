import React, { useState } from "react";
import { HeaderBar } from "../../components/organisms/HeaderBar";
import { PrimaryHeading } from "../../components/atoms/PrimaryHeading";
import { TodoList } from "../../components/molecules/TodoList";
import { TodoInput } from "../../components/molecules/TodoInput";
import { TodoBox } from "../../components/organisms/TodoBox";
import { Basic } from "../../components/templates/Basic";

export const Top = () => {
  const [todoText, setTodoText] = useState("");
  const [todosAdd, setTodosAdd] = useState<string[]>([]);
  const [todosComplete, setTodosComplete] = useState<string[]>([]);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todosAdd, todoText];
    setTodosAdd(newTodos);
    setTodoText("");
  };

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const onClickDelete = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    const newTodos = [...todosAdd];
    newTodos.splice(index, 1);
    setTodosAdd(newTodos);
  };
  const onClickComplete = (index: number) => {
    const newTodos = [...todosAdd];
    const newCompleteTodos = [...todosComplete, newTodos[index]];

    newTodos.splice(index, 1);
    setTodosAdd(newTodos);
    setTodosComplete(newCompleteTodos);
  };

  const onClickReturn = (index: number) => {
    const newCompleteTodos = [...todosComplete];
    const newAddTodos = [...todosAdd, todosComplete[index]];
    newCompleteTodos.splice(index, 1);

    setTodosComplete(newCompleteTodos);
    setTodosAdd(newAddTodos);
  };

  return (
    <>
      <HeaderBar />
      <Basic>
        <TodoBox bgColor="#bbdefb" status="add">
          <PrimaryHeading>TODOリスト追加</PrimaryHeading>
          <TodoInput
            todoText={todoText}
            onChangeText={onChangeText}
            onClickAdd={onClickAdd}
            todoPlaceholder="タスクを入力してください"
          />
        </TodoBox>
        <TodoBox bgColor="#b3e5fc" status="complete">
          <PrimaryHeading>未完了</PrimaryHeading>
          <TodoList
            todos={todosAdd}
            onClickDelete={onClickDelete}
            onClickReturn={onClickReturn}
            onClickComplete={onClickComplete}
            status="complete"
            message="未完了のTODOがありません"
          />
        </TodoBox>
        <TodoBox bgColor="#b2ebf2" status="incomplete">
          <PrimaryHeading>完了</PrimaryHeading>
          <TodoList
            todos={todosComplete}
            onClickDelete={onClickDelete}
            onClickReturn={onClickReturn}
            onClickComplete={onClickComplete}
            status="incomplete"
            message="完了したTODOがありません"
          />
        </TodoBox>
      </Basic>
    </>
  );
};
