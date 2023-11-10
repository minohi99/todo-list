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
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

const App = () => {
  const [todolistAdd, setTodolistAdd] = useState("");

  const onClickAdd = () => {
    setTodolistAdd(todolistAdd);
  };
  return (
    <Container maxWidth="sm" style={{ padding: 40 }}>
      <Stack spacing={10}>
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
                />
              </FormControl>
              <AddCircleIcon
                sx={{
                  padding: 1,
                  "&:hover": {
                    cursor: "pointer",
                    opacity: 0.8,
                  },
                }}
                onClick={onClickAdd}
              />
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
            <ListItemButton
              sx={{
                padding: 0,
              }}
            >
              <ListItem
                secondaryAction={
                  <IconButton>
                    <DeleteOutlineIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <Checkbox edge="start" />
                </ListItemIcon>
                TODO1
              </ListItem>
            </ListItemButton>
            <Divider />
            <ListItemButton
              sx={{
                padding: 0,
              }}
            >
              <ListItem
                secondaryAction={
                  <IconButton>
                    <DeleteOutlineIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <Checkbox edge="start" />
                </ListItemIcon>
                TODO2
              </ListItem>
            </ListItemButton>
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
            <ListItemButton
              sx={{
                padding: 0,
              }}
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
                TODO3
              </ListItem>
            </ListItemButton>
            <Divider />
            <ListItemButton
              sx={{
                padding: 0,
              }}
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
                TODO4
              </ListItem>
            </ListItemButton>
          </List>
        </Box>
      </Stack>
    </Container>
  );
};

export default App;
