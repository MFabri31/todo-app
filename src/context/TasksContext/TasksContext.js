import { createContext, useState } from "react";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (data) => {
    data.id = Date.now();
    setTasks([...tasks, data]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((elem) => elem.id !== id);
    setTasks(newTasks);
  };

  const data = { tasks, addTask, deleteTask };

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>;
};

export { TasksProvider };
export default TasksContext;
