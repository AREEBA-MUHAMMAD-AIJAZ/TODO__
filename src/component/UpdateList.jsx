"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Update = ({ title, body, id, update, setOpen }) => {
  const [value, setValue] = useState({
    title: title,
    body: body,
  });

  return (
    <div className="bg-slate-300 p-5">
      <h3 className=" text-2xl font-semibold py-2">Update Your Task</h3>
      <div className="flex gap-10 items-center justify-center ">
        <input
          type="text"
          className="h-10 p-2"
          name="title"
          placeholder="enter task"
          value={value.title}
          onChange={(e) => setValue({ ...value, title: e.target.value })}
        />

        <input
          className="h-10 p-2"
          name="body"
          placeholder="body"
          value={value.body}
          onChange={(e) => setValue({ ...value, body: e.target.value })}
        />
      </div>

      <div className="flex gap-5 justify-center py-5">
        <button
          onClick={() => update(id, value, setOpen)}
          // onClick={() => setOpen(false)}
          className="bg-red-500 hover:bg-red-700 py-3 px-5 rounded-3xl text-white font-semibold shadow-xl"
        >
          UPDATE
        </button>

        <button
          className="bg-slate-50 hover:bg-slate-200 py-3 px-5 rounded-3xl  font-semibold shadow-xl"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
