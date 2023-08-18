import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../App";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "cetner",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={styles.li}>
      <span className={classes.join(" ")}>
        <input
          checked={todo.completed}
          type="checkbox"
          style={styles.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        {/* &nbsp - это пробел  */}
        &nbsp;
        {todo.title}
      </span>
      <button className="rm" onClick={removeTodo.bind(null, todo.id)}>
        {/* &times - это такой вид кнопки с крестиком по середине   */}
        &times;
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
