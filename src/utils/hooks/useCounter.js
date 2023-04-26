import { useState } from "react";

const useCounter = () => {
  const [Counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(Counter + 1);
  };

  const decrement = () => {
    setCounter(Counter - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return { Counter, increment, decrement, reset };
};

export default useCounter;
