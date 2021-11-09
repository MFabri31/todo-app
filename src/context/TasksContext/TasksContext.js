import { createContext, useState } from "react";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (data) => {
    data.id = Date.now();
    setTasks([...tasks, data]);
  };

  const data = { tasks, addTask };

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>;
};

export { TasksProvider };
export default TasksContext;
