import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <div className="form__field">
        <input class="form__input" type="text" placeholder="add details" />
        <button class="form__btn">Add</button>
      </div>
    </form>
  );
};

export default Form;
