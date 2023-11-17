import React, { useState } from "react";
import { HeaderBar } from "../../components/organisms/HeaderBar";
import { PrimaryHeading } from "../../components/atoms/PrimaryHeading";
import { TodoList } from "../../components/molecules/TodoList";
import { TodoInput } from "../../components/molecules/TodoInput";
import { TodoBox } from "../../components/organisms/TodoBox";
import { Basic } from "../../components/templates/Basic";

/**
 * `Top` コンポーネントは、TODOアプリケーションのメインページを構成します。
 * このページでは、ユーザーは新しいTODOを追加し、既存のTODOを管理（完了や削除）することができます。
 *
 * 以下の主要な機能とセクションが含まれています：
 * 1. `HeaderBar`: アプリケーションのタイトルとヘッダー部分を表示します。
 * 2. `TodoInput`: 新しいTODOを入力し追加するためのインプットフィールドと追加ボタンが含まれます。
 * 3. `TodoList`: 追加されたTODOの一覧を表示し、各TODO項目に対する操作（完了、削除など）が可能です。
 * 4. `TodoBox`: TODOリストのセクションを区切るためのボックス。背景色やステータスに基づいてスタイリングが適用されます。
 * 5. `Basic`: ページ全体の基本的なレイアウトを定義します。
 *
 * @returns {JSX.Element} ヘッダー、TODO入力フォーム、TODOリストを含むメインページ
 */

export const Top = () => {
  const [todoText, setTodoText] = useState("");
  const [todosAdd, setTodosAdd] = useState<string[]>([]);
  const [todosComplete, setTodosComplete] = useState<string[]>([]);

  // TODO追加イベントハンドラ
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todosAdd, todoText];
    setTodosAdd(newTodos);
    setTodoText("");
  };

  // TODOテキスト変更イベントハンドラ
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  // TODO削除イベントハンドラ
  const onClickDelete = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    const newTodos = [...todosAdd];
    newTodos.splice(index, 1);
    setTodosAdd(newTodos);
  };

  // TODO完了イベントハンドラ
  const onClickComplete = (index: number) => {
    const newTodos = [...todosAdd];
    const newCompleteTodos = [...todosComplete, newTodos[index]];

    newTodos.splice(index, 1);
    setTodosAdd(newTodos);
    setTodosComplete(newCompleteTodos);
  };

  // TODO未完了に戻すイベントハンドラ
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
