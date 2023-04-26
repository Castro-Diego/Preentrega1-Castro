import { useState, useEffect } from "react";
import ItemList from "./ItemList.jsx";
import { products } from "../../ProductsMosk";
import useCounter from "../../utils/hooks/useCounter.js";

const ItemListContainer = () => {
  const { Counter } = useCounter();

  const [items, setIems] = useState(0);

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      resolve(products);
    });

    tarea.then((res) => setIems(res)).catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ItemList items={items} />

      <h1> {Counter} </h1>
    </div>
  );
};
export default ItemListContainer;
