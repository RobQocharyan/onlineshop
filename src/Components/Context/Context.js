import { useContext, createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import ShoppingCart from "./../ShoppingCart/ShoppingCart";

const ShopingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShopingCartContext);
}

export function ShoopingCartProvider({ children }) {
  const [itemCart, setItemCart] = useLocalStorage("shoping-cart",[]);
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true)
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const cartCount = itemCart.reduce((count, item) => {

    return item.count + count;
    
  }, 0);

  function getItemCount(id) {

    return itemCart.find((item) => item.id === id)?.count || 0;
  }
  function incrementCardCount(id) {

    setItemCart((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem,{ id, count: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decrementCardCount(id) {

    setItemCart((currentItem) => {
      if (currentItem.find((item) => item.id === id)?.count === 1) {
        return currentItem.filter((item) => item.id !== id);
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeAllCart(id) {

    setItemCart((currentItem) => {
      return currentItem.filter((item) => {
        return item.id !== id;
      });
    });
  }
  return (
    <ShopingCartContext.Provider
      value={{
        getItemCount,
        incrementCardCount,
        decrementCardCount,
        removeAllCart,
        openCart,
        closeCart,
        cartCount,
        cartOpen,
        itemCart
      }}
    >
      {children}

      <ShoppingCart cartOpen={cartOpen} />
    </ShopingCartContext.Provider>
  );
}
