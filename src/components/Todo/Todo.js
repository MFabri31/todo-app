import React, { useState } from "react";
import Form from "../Form/Form";
import TasksList from "../TasksList/TasksList";

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (data) => {
    data.id = Date.now();
    setTasks([...tasks, data]);
  };

  return (
    <>
      <Form addTask={addTask} />
      <TasksList tasks={tasks} />
    </>
  );
};

export default Todo;
