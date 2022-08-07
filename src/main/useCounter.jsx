import React from "react";
import { useState } from "react";

function useCounter(initValue, maxValue, minValue = 0) {
  const [count, setCount] = useState(initValue);
  const increaseCount = () =>
    setCount((count) => Math.min(maxValue, count + 1));
  const decreaseCount = () =>
    setCount((count) => Math.max(minValue, count - 1));
  return [count, increaseCount, decreaseCount];
}

export default useCounter;
