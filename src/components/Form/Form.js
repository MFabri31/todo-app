import React, { useState, useContext } from "react";
import TasksContext from "../../context/TasksContext/TasksContext";
import "./Form.css";

const initialForm = {
  id: null,
  task: "",
  completed: false,
};

const Form = () => {
  const [form, setForm] = useState(initialForm);
  const { addTask } = useContext(TasksContext);

  const { task } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") return;
    else addTask(form);

    setForm(initialForm);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <input
          className="form__input"
          type="text"
          placeholder="add details"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button className="form__btn">Add</button>
      </div>
    </form>
  );
};

export default Form;
