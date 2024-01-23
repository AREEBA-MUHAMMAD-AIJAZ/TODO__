"use client";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const inputValue = document.getElementById("myInput").value;
    if (inputValue.trim() === "") {
      alert("You must write something!");
    } else {
      setTodos([...todos, inputValue]);
    }
    document.getElementById("myInput").value = "";
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = `${updatedTodos[index]} (completed)`;
    setTodos(updatedTodos);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="header bg-red-500 p-8 text-black text-center">
      <h2 className="text-2xl font-bold">My To Do List</h2>
      <input
        type="text"
        id="myInput"
        placeholder="Title..."
        className="w-3/4 p-2 mt-4"
      />
      <button
        onClick={handleAddTodo}
        className="addBtn bg-gray-300 text-gray-700 p-2 ml-2 rounded transition duration-300 hover:bg-gray-400"
      >
        Add
      </button>

      <ul className="mt-8">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`cursor-pointer relative p-3 transition duration-200 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
            }`}
            onClick={() => handleToggleTodo(index)}
          >
            {todo}
            <span
              className="close absolute top-0 right-0 p-3 transition duration-300 hover:bg-red-600 hover:text-white"
              onClick={() => handleRemoveTodo(index)}
            >
              &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
