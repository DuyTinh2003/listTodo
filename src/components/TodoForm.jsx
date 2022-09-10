import { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      value: input,
      completed: false,
    };
    props.addTodo(newTodo);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="form_todo">
      <div className="wrap_input">
        <input
          value={input}
          type="text"
          placeholder="Enter your Todo"
          onChange={handleInput}
        />
        <button className="btn_add_todo">Add</button>
      </div>
    </form>
  );
}

export default TodoForm;
