import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import TasksContext from "../../context/TasksContext/TasksContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";
import TrashIcon from "../../assets/icons/trash-icon.png";

const TasksList = () => {
  const { tasks, deleteTask } = useContext(TasksContext);

  let location = useLocation();

  return (
    <>
      <ul className="tasks-list">
        {tasks.map((elem) => (
          <TaskItem
            key={elem.id}
            elem={elem}
            location={location}
            deleteTask={deleteTask}
          />
        ))}
        {location.pathname === "/completed" && tasks.length !== 0 ? (
          <button className="btn-delete">
            <img src={TrashIcon} alt="trash-icon" />
            delete all
          </button>
        ) : null}
      </ul>
    </>
  );
};

export default TasksList;
