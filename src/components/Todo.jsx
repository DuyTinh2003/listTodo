import { useState, useRef } from "react";

function Todo(props) {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const handleDelete = (id) => {
    props.deleteTodo(id);
  };
  const handleEdit = (id) => {
    const itemTodo = document.getElementById(`${id}`);
    itemTodo.classList.remove("edit");
    props.updateTodo(id, input);
  };
  const handleToggleComplete = (id) => {
    props.toggleComplete(id);
  };
  const handleToggleEdit = (id, value) => {
    const itemTodo = document.getElementById(`${id}`);
    itemTodo.querySelector(".edit_todo input").focus();
    setInput(value);
    itemTodo.classList.add("edit");
  };
  return (
    <ul className="list_todo">
      {props.todo.map((item, index) => (
        <li
          id={item.id}
          key={index}
          className={`item_todo ${item.completed ? "completed" : ""} 
          `}
          onClick={(e) => {
            handleToggleComplete(item.id);
          }}
        >
          <form
            action=""
            className="edit_todo"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit(item.id);
            }}
          >
            <input type="text" onChange={handleInput} value={input} />
            <button>edit</button>
          </form>
          <span>{item.value}</span>
          <div className="wrap_active">
            <i
              className="fa-sharp fa-solid fa-trash"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(item.id);
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleEdit(item.id, item.value);
              }}
            ></i>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todo;
