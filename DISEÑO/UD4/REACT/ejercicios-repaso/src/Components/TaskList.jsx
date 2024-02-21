// SINTAXIS ANTIGUA
// class TaskList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { tasks: [] };
//   }
//   //Agregar nuevas tareas
//   handleAddTask = () => {
//     this.setState({
//       tasks: this.state.tasks.map((tasks) => tasks.push(TaskItem)),
//     });
//   };

//   //Marcar tareas como completadas
//   handleCompleteTask = () => {};
//   render() {
//     return (
//       <>
//         <div>{this.state.tasks}</div>
//         {this.state.tasks.length > 0 && (
//           <TaskList onClearHistory={handleClearHistory} />
//         )}
//       </>
//     );
//   }
// }

import { List, ListItem, Divider } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import TaskItem from "./TaskItem";
TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};
function TaskList({ tasks }) {
  return (
    <>
      <Divider />
      <List>
        {tasks.length > 0 &&
          tasks.map((task, indice) => (
            <React.Fragment key={indice}>
              <ListItem>
                <TaskItem task={task} />
              </ListItem>
            </React.Fragment>
          ))}
      </List>
    </>
  );
}

export default TaskList;
