import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Test2 = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("http://13.125.39.34/insta/main").then((res) => {
      // setData(res.data.ret[0].title);
      setData(res.data.ret[0].title);
      console.log(res.data.ret[0].title);
    });
  }, []);

  return <React.Fragment>{data}</React.Fragment>;
};

export default Test2;
