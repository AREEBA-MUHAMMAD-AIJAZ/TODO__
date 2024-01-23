"use client";
import { useEffect, useState } from "react";
import TodoCards from "@/component/TodoCards";
import Loading from "@/component/Loader";
import ClearTodoButton from "@/component/ClearTodoButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Todo = () => {

  const completeAll = async () => {
    try {
      const res = await axios.put(`http://localhost:1000/api/v2/completeAll`);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
    }
    // Array.splice(id, "1");
    // setArray(del);
  }; 
  const delAll = async () => {
    try {
      const res = await axios.delete(`http://localhost:1000/api/v2/deleteAll`);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
    }
    // Array.splice(id, "1");
    // setArray(del);
  };
  const [input, setInput] = useState({
    title: "",
    body: "",
    email: "",
    status: "pending",
  });
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);

  const Change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submit = async () => {
    console.log(input);
    {
      if (
        input.title === "" ||
        input.body === "" ||
        input.email === "" ||
        input.status === ""
      ) {
        toast.error("Fields Empty");
      } else {
        const res = await axios.post(
          "http://localhost:1000/api/v2/addTask",
          input
        );
        // console.log(res,"res");
        // setArray([...Array, input]);
        setInput({ title: "", body: "", email: "", status: "" });
        toast.success("Task Added...");
        toast.error("Task added but not save! Let's Signup");
      }
    }
  };
  // console.log(Array)

  const del = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:1000/api/v2/deleteTask/${id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
    }
    // Array.splice(id, "1");
    // setArray(del);
  };
  const getData = async () => {
    const res = await axios.get("http://localhost:1000/api/v2/getTasks");
    setData(res.data);
    setLoader(false);
    console.log(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const update = async (id, data, setOpen) => {
    const res = await axios.put(
      `http://localhost:1000/api/v2/updateTask/${id}`,
      data
    );
    setOpen(false);
  };

  return (
    <>
      {loader ? (
        <Loading />
      ) : (
        <div className="max-w-6xl mx-auto mt-5 ">
          <ToastContainer />
          <h1 className="text-4xl font-bold underline text-start">
            TODO APPLICATION
          </h1>
          <div className="flex gap-5 border p-5 my-3">
            <input
              type="text"
              name="title"
              id=""
              placeholder="Todo Title"
              required
              className="border p-2 rounded-lg"
              onChange={Change}
              value={input.title}
            />
            <input
              type="text"
              name="email"
              id=""
              required
              placeholder="Email"
              className="border p-2 rounded-lg"
              onChange={Change}
              value={input.email}
            />

            <input
              type="text"
              name="body"
              id="textarea"
              required
              placeholder="Description"
              className="border p-2 rounded-lg"
              onChange={Change}
              value={input.body}
            />

            <button
              type="button"
              className="bg-blue-300 p-3 rounded-md text-white"
              value={input.status}
            >
              Status
            </button>

            <button
              type="button"
              className="border p-2 bg-blue-500 hover:bg-white hover:text-blue-500 hover:border-blue-500
              text-white font-semibold rounded-lg "
              onClick={submit}
            >
              Create Todo
            </button>
          </div>
          <div className="flex justify-end gap-4 max-w-6xl my-5 mx-20">
            <ClearTodoButton bbtnName="Clear Todos" func={delAll} />
            <ClearTodoButton bbtnName="Mark as Completed" func={completeAll} />
          </div>

          <div className="border flex max-w-5xl mx-auto font-semibold">
            <h1 className="border w-60 p-2">Name</h1>
            <h1 className="border w-[500px] p-2">Description</h1>
            <h1 className="border w-44 p-2">Status</h1>
            <h1 className="border w-44 p-2">Action</h1>
          </div>

          <div>
            <div className="">
              {data &&
                data.list.map((item, index) => {
                  console.log(item);
                  return (
                    <div key={index}>
                      <TodoCards
                        title={item.title}
                        body={item.body}
                        id={item._id}
                        delid={del}
                        update={update}
                        status={item.status}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
