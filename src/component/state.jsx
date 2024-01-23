"use client";
import { useState } from "react";
import Num from "@/component/num";

const State = () => {
  const [data, setData] = useState(0);
  var num = 0;
  console.log("data", data);
  console.log("num:", num);
  return (
    <div>
      <h1>state: {data}</h1>
      <h1>var:{num}</h1>
      <button onClick={() => setData(data + 1)}>state + </button>
      <button onClick={() => num + 1}>var + </button>
      <Num num={num} />
    </div>
  );
};

export default State;
