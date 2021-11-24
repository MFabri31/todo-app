import React from "react";
import TrashIcon from "../../assets/icons/trash-icon.png";
import "./TaskItem.css";

const TaskItem = ({
  elem,
  deleteTask,
  handleCompleted,
  location,
  lineThrough,
}) => {
  return (
    <li className={`tasks-list__item ${lineThrough} `}>
      <label className="tasks-list__label">
        {elem.task}
        <input
          type="checkbox"
          className="tasks-list__input"
          onChange={() => handleCompleted(elem.id)}
          checked={elem.completed}
        />
        <span className="checkmark"></span>
      </label>

      {location.pathname === "/completed" ? (
        <img
          className="tasks-list__icon"
          src={TrashIcon}
          alt="trash-icon"
          onClick={() => deleteTask(elem.id)}
        />
      ) : null}
    </li>
  );
};

export default TaskItem;
