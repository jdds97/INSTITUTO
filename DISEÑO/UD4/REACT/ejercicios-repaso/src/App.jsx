import "./App.css";
import { Container, Box } from "@mui/material";
import Counter from "./Components/Counter.jsx";
import TaskList from "./Components/TaskList.jsx";
import Gallery from "./Components/Gallery.jsx";
import { Button } from "@mui/material";
import { useState } from "react";
import SearchBar from "./Components/SearchBar.jsx";
function App() {
  const [tasks, setTasks] = useState([]);
  function handleAddTasks() {
    const newTask = { id: tasks.length, name: "Nueva tarea" };
    setTasks([...tasks, newTask]);
  }

  const [images, setImages] = useState([]);

  function handleSearch(searchTerm) {
    const url = `https://picsum.photos/list/${searchTerm}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setImages((data) => data.author.includes(searchTerm));
      })
      .catch((error) => {
        // Maneja cualquier error que pueda ocurrir
        console.error("Error:", error);
      });
  }

  return (
    <Container>
      <Box>
        <Counter />
        <SearchBar onSearch={handleSearch} />
        <TaskList tasks={tasks} />
        <Gallery images={images} />
        <Button onClick={handleAddTasks} variant="contained" type="submit">
          Añadir tarea
        </Button>
      </Box>
    </Container>
  );
}

export default App;
