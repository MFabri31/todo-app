import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";

const TasksList = ({ tasks }) => {
  return (
    <ul className="tasks-list">
      {tasks.map((elem) => (
        <TaskItem id={elem.id} elem={elem} />
      ))}
    </ul>
  );
};

export default TasksList;
