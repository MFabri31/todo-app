import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import TasksContext from "../../context/TasksContext/TasksContext";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";
import TrashIcon from "../../assets/icons/trash-icon.png";

const TasksList = () => {
  const { tasks, deleteTask, handleCompleted, deleteAll } =
    useContext(TasksContext);

  let location = useLocation();

  return (
    <>
      <ul className="tasks-list">
        {tasks.map((elem) =>
          location.pathname === "/" ? (
            <TaskItem
              key={elem.id}
              elem={elem}
              location={location}
              handleCompleted={handleCompleted}
            />
          ) : location.pathname === "/active" && elem.completed === false ? (
            <TaskItem
              key={elem.id}
              elem={elem}
              location={location}
              handleCompleted={handleCompleted}
            />
          ) : location.pathname === "/completed" && elem.completed === true ? (
            <TaskItem
              key={elem.id}
              elem={elem}
              location={location}
              deleteTask={deleteTask}
              handleCompleted={handleCompleted}
              lineThrough="line-through"
            />
          ) : null
        )}

        {location.pathname === "/completed" && tasks.length !== 0 ? (
          <button className="btn-delete" onClick={deleteAll}>
            <img src={TrashIcon} alt="trash-icon" />
            delete all
          </button>
        ) : null}
      </ul>
    </>
  );
};

export default TasksList;
