import React, { useState } from "react";
import "./Form.css";

let initialForm = {
  id: "",
  task: "",
};

const Form = ({ addTask }) => {
  const [form, setForm] = useState(initialForm);

  const { task } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(form);

    setForm(initialForm);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <input
          class="form__input"
          type="text"
          placeholder="add details"
          name="task"
          value={task}
          onChange={handleChange}
        />
        <button class="form__btn">Add</button>
      </div>
    </form>
  );
};

export default Form;
