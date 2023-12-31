import PropTypes from "prop-types";
import { useState } from "react";

//создаем свой кастомный хук
const useInputValue = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
};

const AddTodo = ({ onCreate }) => {
  const input = useInputValue("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  };
  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  );
};

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
