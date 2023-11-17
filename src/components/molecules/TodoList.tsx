import { List } from "@mui/material";
import { TodoListItem } from "../atoms/TodoListItem";
import { NoTodosText } from "../atoms/NoTodosText";
import { memo } from "react";

/**
 * `TodoList` コンポーネントは、TODOリストのアイテムを一覧表示します。
 * 各アイテムは `TodoListItem` コンポーネントを使用して表示され、
 * TODOリストが空の場合は `NoTodosText` コンポーネントを使用してメッセージが表示されます。
 *
 * @param {Object} props - コンポーネントのプロップス
 * @param {string[]} props.todos - 表示するTODOアイテムの配列
 * @param {(event: React.MouseEvent, index: number) => void} props.onClickDelete - 削除ボタンのクリックイベントハンドラ
 * @param {(index: number) => void} [props.onClickReturn] - 完了したTODOを未完了に戻すボタンのクリックイベントハンドラ
 * @param {(index: number) => void} [props.onClickComplete] - 未完了のTODOを完了にするボタンのクリックイベントハンドラ
 * @param {"complete" | "incomplete"} props.status - TODOアイテムの状態
 * @param {string} props.message - TODOリストが空の場合に表示するメッセージ
 * @returns {JSX.Element} TODOアイテムのリスト
 */

type TodoListType = {
  todos: string[];
  onClickDelete: (event: React.MouseEvent, index: number) => void;
  onClickReturn?: (index: number) => void;
  onClickComplete?: (index: number) => void;
  status: "complete" | "incomplete";
  message: string;
};

export const TodoList = memo(
  ({
    todos,
    onClickDelete,
    onClickReturn,
    onClickComplete,
    status,
    message,
  }: TodoListType) => {
    return (
      <List>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoListItem
              key={index}
              onClickDelete={onClickDelete}
              onClickReturn={onClickReturn}
              onClickComplete={onClickComplete}
              todo={todo}
              index={index}
              status={status}
            />
          ))
        ) : (
          <NoTodosText message={message} />
        )}
      </List>
    );
  }
);
