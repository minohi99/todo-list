import { memo } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";

/**
 * `TodoAddButton` コンポーネントは、TODOリストへの項目追加用のボタンを提供します。
 * テキストが入力されていない場合、このボタンは無効化されます。
 *
 * @param {Object} props - コンポーネントのプロップス
 * @param {() => void} props.onClickAdd - ボタンがクリックされた時に実行される関数
 * @param {string} props.todoText - 現在のTODOテキスト入力値
 * @returns {JSX.Element} TODO追加用のアイコンボタン
 */
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
