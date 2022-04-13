import react, { useState, createContext } from "react";
import { getProduct } from "./services/ProductServices";

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function additemtocart(id) {
    const product = getProduct(id);
    setItems((previtems) => {
      const item = previtems.find((item) => item.id == id);
      if (!item) {
        return [
          ...previtems,
          {
            id,
            qty: 1,
            product,
            totalprice: product.price,
          },
        ];
      } else {
        return previtems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalprice += product.price;
          }
          return item;
        });
      }
    });
  }
  function getitemscount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function gettotalprice() {
    return items.reduce((sum, item) => sum + item.totalprice, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, getitemscount, gettotalprice, additemtocart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
