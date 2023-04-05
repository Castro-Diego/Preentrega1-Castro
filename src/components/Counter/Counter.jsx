import { useState } from "react";

const Counter = () => {
  const [Counter, SetCounter] = useState(1);

  const Sumar = () => {
    SetCounter(Counter + 1);
  };

  const restar = () => {
    SetCounter(Counter - 1);
  };

  return (
    <div>
      <h1>nuevo contador</h1>
      <button onClick={Sumar}>Sumar</button>
      <h3>{Counter}</h3>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Counter;
