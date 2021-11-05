import React from "react";
import "./TasksList.css";

const TasksList = () => {
  return (
    <ul className="tasks-list">
      <li className="tasks-list__item">
        <label className="tasks-list__label">
          Do coding challenges
          <input type="checkbox" className="tasks-list__input" />
          <span className="checkmark"></span>
        </label>
      </li>
    </ul>
  );
};

export default TasksList;
