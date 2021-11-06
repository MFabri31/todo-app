import React from "react";

const TaskItem = ({ elem }) => {
  return (
    <li className="tasks-list__item">
      <label className="tasks-list__label">
        {elem.task}
        <input type="checkbox" className="tasks-list__input" />
        <span className="checkmark"></span>
      </label>
    </li>
  );
};

export default TaskItem;
