import Update from "@/component/UpdateList";
import { useState } from "react";
import axios from "axios";

const TodoCards = ({ title, body, delid, id, update, status }) => {
  const [open, setOpen] = useState(false);
  const updateStatus = async (id, data) => {
    const status2 = {
      status: data == "Completed" ? "pending" : "Completed",
    };
    const res = await axios.put(
      `http://localhost:1000/api/v2/updateTask/${id}`,
      status2
    );
  };
  return (
    <>
      {open ? (
        <Update
          setOpen={setOpen}
          title={title}
          body={body}
          id={id}
          update={update}
        />
      ) : (
        <div className="border flex max-w-5xl mx-auto ">
          <h1 className="border w-60 p-2"> {title}</h1>
          <h1 className="border  w-[500px] p-2">{body.split("", 20)}...</h1>
          <div className="border w-44 text-center">
            {status && (
              <button
                onClick={() => {
                  updateStatus(id, status);
                }}
                className={`${
                  status == "pending" ? "bg-red-800" : "bg-green-700"
                }  p-1 px-5 my-1 rounded-md text-white `}
              >
                {status}
              </button>
              //  <button onClick={()=>setStat(!stat)} className="bg-red-800 p-1 px-5 my-1 rounded-md text-white ">{stat===true?"Pending":"Complete"} </button>
            )}
          </div>
          <div className="flex gap-3 mx-3 my-1">
            <button
              className=" bg-red-500 w-16 p-1 rounded-md text-white"
              onClick={() => {
                setOpen(true);
              }}
            >
              Edit
            </button>
            <button
              className=" bg-green-500 w-16 p-1 rounded-md text-white"
              onClick={() => delid(id)}
            >
              {" "}
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoCards;
