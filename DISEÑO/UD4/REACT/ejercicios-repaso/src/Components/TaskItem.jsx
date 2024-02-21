//SINTAXIS ANTIGUA
// import React from "react";
// class TaskItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { completada: false, id: 0 };
//   }
//   render() {
//     return (
//       <>
//         <div>

//         </div>
//       </>
//     );
//   }
// }
import { Typography, Divider } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";

import PropTypes from "prop-types";

export default function TaskItem({ task }) {
  const [estado, setEstado] = useState(false);

  function handleCompleteTask() {
    setEstado(!estado);
  }
  return (
    <>
      <Typography variant="h4">Tarea {task.name}</Typography>
      <Typography>
        Estado: {task.estado ? "Completada" : "Pendiente"}
      </Typography>
      <Divider />
      <Button onClick={handleCompleteTask} variant="contained" type="submit">
        Marcar como completada
      </Button>
    </>
  );
}
TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};
