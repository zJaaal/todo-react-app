import PropTypes from "prop-types";

const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <p
        className={`${todo.done && "complete"}` /*Short circuit*/}
        onClick={() => handleToggle(todo.id)}
      >
        #{index + 1} {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default TodoListItem;
