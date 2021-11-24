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

  const handleCompleted = (id) => {
    const updateTasks = tasks.map((elem) => {
      if (elem.id === id) elem.completed = !elem.completed;
      return elem;
    });

    setTasks(updateTasks);
  };

  const deleteAll = () => {
    const newTasks = tasks.filter((elem) => elem.completed === false);
    setTasks(newTasks);
  };

  const data = { tasks, addTask, deleteTask, handleCompleted, deleteAll };

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>;
};

export { TasksProvider };
export default TasksContext;
