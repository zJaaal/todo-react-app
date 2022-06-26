import PropTypes from "prop-types";
import useForm from "../hooks/useForm";

const TodoAdd = ({ handleAdd }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let desc = description.trim();

    if (!desc.length) return;

    handleAdd({ id: Date.now(), desc: desc, done: false });
    reset();
  };

  return (
    <>
      <h2 className="text-center">Create To-Do</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column m-2">
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Learn Node.js"
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />
        <button
          className=" btn btn-outline-primary btn-block mt-1"
          type="submit"
        >
          Add To-Do
        </button>
      </form>
    </>
  );
};

TodoAdd.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default TodoAdd;
