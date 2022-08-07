import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Clock(props) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 100);
  });
  return <p>{time}</p>;
}

export default Clock;
