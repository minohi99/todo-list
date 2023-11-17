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

/**
 * `TodoListItem` コンポーネントは、個々のTODOリストアイテムを表示します。
 * 各アイテムには、完了/未完了の状態を切り替えるチェックボックス、
 * 削除ボタン、および未完了のアイテムに戻すためのボタンが含まれます。
 *
 * @param {Object} props - コンポーネントのプロップス
 * @param {(event: React.MouseEvent<HTMLButtonElement>, index: number) => void} props.onClickDelete - 削除ボタンのクリックイベントハンドラ
 * @param {string} props.todo - 表示するTODOのテキスト
 * @param {number} props.index - TODOアイテムのインデックス
 * @param {"complete" | "incomplete"} props.status - TODOアイテムの状態
 * @param {(index: number) => void} [props.onClickComplete] - 完了ボタンのクリックイベントハンドラ
 * @param {(index: number) => void} [props.onClickReturn] - 未完了に戻すボタンのクリックイベントハンドラ
 * @returns {JSX.Element} TODOリストアイテム
 */

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
