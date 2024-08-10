import {
  Box,
  Button,
  Checkbox,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import DeleteIcon from "@mui/icons-material/Delete"; // Grid version 2
import { useState } from "react";
interface Tlist {
  id: number;
  task: string;
  done: Boolean;
}

export default function TodoMenu() {
  const [task, setTask] = useState<string>("");
  const [list, setList] = useState<Tlist[]>([]);

  const addTask = () => {
    if (task.trim()) {
      setList((prev) => [...prev, { id: Math.random(), task, done: false }]);
      setTask("");
    }
  };

  const toggleDone = (id: number) => {
    setList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };
  const deleteItem = (id: number) => {
    setList((prev) => prev.filter((item) => id != item.id));
    console.log(list);
  };

  return (
    <Container>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Enter Task..."
        value={task}
        onChange={(e) => {
          setTask(e.currentTarget.value);
        }}
      ></TextField>
      <Button
        variant="contained"
        sx={{
          marginLeft: 1,
        }}
        size="medium"
        onClick={addTask}
        color="primary"
      >
        Add
      </Button>

      <Box marginTop={2}>
        <Paper elevation={2}>
          {list.map((task) => (
            <Grid container key={task.id} alignItems="center" spacing={2}>
              <Grid xs={12} sm={6}>
                <Typography
                  style={{
                    textDecoration: task.done ? "line-through" : "none",
                    color: task.done ? "gray" : "white",
                    fontStyle: task.done ? "italic" : "normal]",
                  }}
                  variant="h6"
                >
                  {task.task}
                </Typography>
              </Grid>
              <Grid xs={12} sm={3}>
                <Checkbox
                  color="secondary"
                  key={task.id}
                  onChange={() => toggleDone(task.id)}
                />
              </Grid>
              <Grid xs={12} sm={3}>
                <Button
                  key={task.id}
                  color="secondary"
                  variant="outlined"
                  onClick={() => deleteItem(task.id)}
                  startIcon={<DeleteIcon color="secondary" />}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          ))}
        </Paper>
      </Box>
    </Container>
  );
}
