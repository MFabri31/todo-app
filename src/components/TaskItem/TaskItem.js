import React from "react";
import TrashIcon from "../../assets/icons/trash-icon.png";
import "./TaskItem.css";

const TaskItem = ({ elem, deleteTask, location }) => {
  return (
    <li className="tasks-list__item">
      <label className="tasks-list__label">
        {elem.task}
        <input type="checkbox" className="tasks-list__input" />
        <span className="checkmark"></span>
      </label>

      {location.pathname !== "/completed" ? null : (
        <img
          className="tasks-list__icon"
          src={TrashIcon}
          alt="trash-icon"
          onClick={() => deleteTask(elem.id)}
        />
      )}
    </li>
  );
};

export default TaskItem;
