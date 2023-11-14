import {
  Box,
  Container,
  Divider,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./App.css";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { HeaderBar } from "./components/organisms/HeaderBar";

const App = () => {
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
    <Container
      maxWidth="sm"
      style={{
        padding: "200px 40px 40px",
        height: "100vh",
      }}
    >
      <HeaderBar />
      <Stack spacing={6}>
        <Box
          style={{
            borderRadius: 8,
            padding: 20,
            background: "#bbdefb",
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h5">TODOリスト追加</Typography>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={1}
              alignItems="center"
            >
              <FormControl fullWidth>
                <TextField
                  sx={{
                    backgroundColor: "#ffffff",
                  }}
                  placeholder="タスクを入力してください"
                  value={todoText}
                  onChange={onChangeText}
                />
              </FormControl>
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
            </Stack>
          </Stack>
        </Box>
        <Box
          style={{
            borderRadius: 8,
            padding: 20,
            background: "#b3e5fc",
          }}
        >
          <Typography variant="h5">未完了</Typography>
          <List>
            {todosAdd.length > 0 ? (
              todosAdd.map((todo, index) => {
                return (
                  <>
                    <ListItemButton
                      sx={{
                        padding: 0,
                      }}
                      key={index}
                      onClick={() => onClickComplete(index)}
                    >
                      <ListItem
                        secondaryAction={
                          <IconButton onClick={(e) => onClickDelete(e, index)}>
                            <DeleteOutlineIcon />
                          </IconButton>
                        }
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            // onClick={() => onClickComplete(index)}
                          />
                        </ListItemIcon>
                        {todo}
                      </ListItem>
                    </ListItemButton>
                    <Divider />
                  </>
                );
              })
            ) : (
              <Typography sx={{ padding: 2 }}>
                未完了のTODOがありません
              </Typography>
            )}
          </List>
        </Box>
        <Box
          style={{
            borderRadius: 8,
            padding: 20,
            background: "#b2ebf2",
          }}
        >
          <Typography variant="h5">完了</Typography>
          <List>
            {todosComplete.length > 0 ? (
              todosComplete.map((todo, index) => (
                <React.Fragment key={index}>
                  <ListItemButton
                    sx={{
                      padding: 0,
                    }}
                    onClick={() => onClickReturn(index)}
                  >
                    <ListItem
                      secondaryAction={
                        <IconButton>
                          <KeyboardReturnIcon />
                        </IconButton>
                      }
                    >
                      <ListItemIcon>
                        <Checkbox edge="start" checked />
                      </ListItemIcon>
                      <s>{todo}</s>
                    </ListItem>
                  </ListItemButton>
                  <Divider />
                </React.Fragment>
              ))
            ) : (
              <Typography sx={{ padding: 2 }}>
                完了したTODOがありません
              </Typography>
            )}
          </List>
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
