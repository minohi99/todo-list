import React, { memo } from "react";
import {
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

type TodoListItemType = {
  onClickDelete: (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => void;
  todo: string;
  index: number;
  status: "complete" | "incomplete";
  onClickComplete?: (index: number) => void;
  onClickReturn?: (index: number) => void;
};

export const TodoListItem = memo(
  ({
    onClickDelete,
    todo,
    index,
    status,
    onClickComplete = () => {},
    onClickReturn = () => {},
  }: TodoListItemType) => {
    return (
      <>
        <ListItemButton
          sx={{
            padding: 0,
          }}
          key={index}
          onClick={() =>
            status === "complete"
              ? onClickComplete(index)
              : onClickReturn(index)
          }
        >
          <ListItem
            secondaryAction={
              status === "complete" ? (
                <IconButton onClick={(e) => onClickDelete(e, index)}>
                  <DeleteOutlineIcon />
                </IconButton>
              ) : (
                <IconButton>
                  <KeyboardReturnIcon />
                </IconButton>
              )
            }
          >
            <ListItemIcon>
              <Checkbox edge="start" checked={status === "incomplete"} />
            </ListItemIcon>
            {status === "complete" ? todo : <s>{todo}</s>}
          </ListItem>
        </ListItemButton>
        <Divider />
      </>
    );
  }
);
