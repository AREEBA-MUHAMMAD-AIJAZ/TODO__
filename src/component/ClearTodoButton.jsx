import React from "react";

const ClearTodoButton = ({ bbtnName, func }) => {
  return (
    <div>
      <button
        onClick={func}
        className="bg-pink-400 p-2 text-white rounded-lg"
      >
        {bbtnName}
      </button>
    </div>
  );
};

export default ClearTodoButton;
