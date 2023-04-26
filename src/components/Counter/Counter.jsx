import { useState } from "react";

const Counter = () => {
  const [Counter, SetCounter] = useState(1);

  const Sumar = () => {
    SetCounter(Counter + 1);
  };

  const restar = () => {
    if (Counter > 0) {
      SetCounter(Counter - 1);
    } else {
      alert("el contador no puede ser menor que cero");
    }
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
