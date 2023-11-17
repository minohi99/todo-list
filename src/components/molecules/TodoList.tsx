import { List } from "@mui/material";
import { TodoListItem } from "../atoms/TodoListItem";
import { NoTodosText } from "../atoms/NoTodosText";

type TodoListType = {
  todos: string[];
  onClickDelete: (event: React.MouseEvent, index: number) => void;
  onClickReturn?: (index: number) => void;
  onClickComplete?: (index: number) => void;
  status: "complete" | "incomplete";
  message: string;
};

export const TodoList = ({
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
};
