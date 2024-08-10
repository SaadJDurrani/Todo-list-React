import { Box, Container } from "@mui/material";
import TodoMenu from "./Components/TodoMenu";
import { CustomTheme } from "./Components/CustomTheme";

function App() {
  return (
    <CustomTheme>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1>Todo List</h1>
        <Container maxWidth="sm">
          <TodoMenu />
        </Container>
      </Box>
    </CustomTheme>
  );
}

export default App;
