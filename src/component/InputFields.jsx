const InputFields = () => {
  return (
    <div className="border border-1 border-gray-300 p-7 max-w-6xl mx-auto flex gap-9 rounded-xl my-2">
      <input
        type="text"
        placeholder="Todo title"
        className="border border-1 border-gray-300 p-3 rounded-xl"
      />
      <input
        type="text"
        placeholder="Description"
        className="border border-1 border-gray-300 p-3 rounded-xl"
      />
      <button
        type="submit"
        className="border border-1 border-gray-200 p-3 bg-blue-600 text-white font-semibold rounded-xl"
      >
        Create Todo
      </button>
    </div>
  );
};

export default InputFields;
