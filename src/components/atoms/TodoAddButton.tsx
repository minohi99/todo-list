import { memo } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";

type TodoAddButtonTypes = {
  onClickAdd: () => void;
  todoText: string;
};

export const TodoAddButton = memo((props: TodoAddButtonTypes) => {
  const { onClickAdd, todoText } = props;

  return (
    <IconButton
      sx={{
        padding: 1,
        color: "black",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={onClickAdd}
      disabled={!todoText}
    >
      <AddCircleIcon />
    </IconButton>
  );
});
