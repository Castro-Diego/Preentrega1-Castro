import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../ProductsMosk";

export const ItemDetailcontainer = () => {
  const [products, setProducts] = useState({});

  let id = 3;

  useEffect(() => {
    let encontrado = products.find((prod) => prod.id === id);
    setTimeout(() => {
      setProducts(encontrado);
    }, 2000);
  }, [id]);

  return (
    <div>
      <ItemDetail products={products} />
    </div>
  );
};

export default ItemDetailcontainer;
