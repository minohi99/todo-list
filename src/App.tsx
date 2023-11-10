import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "./App.css";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <Typography>TODOリスト一覧</Typography>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          alignItems="center"
        >
          <TextField label="タスクを入力してください" variant="filled" />
          <AddCircleIcon />
        </Stack>
      </Box>
      <Box>
        <Typography>TODOリスト一覧</Typography>
      </Box>
      <Box>
        <Typography>TODOリスト一覧</Typography>
      </Box>
    </Container>
  );
};

export default App;
