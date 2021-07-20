import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

/**
 *
 * @returns Danh sach san pham trong cart
 */
const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  console.log(cart);
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  // tong so items
  total_items: 0,
  // tong
  total_amount: 0,
  //phi ship
  shipping_fee: 500,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Them san pham vao gio hang
   * @param {*} id
   * @param {*} color
   * @param {*} amount
   * @param {*} product
   */
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  /**
   * Xoa san pham khoi gio hang
   * @param {*} id
   */
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };

  /**
   *
   * @param {*} id
   * @param {*} value
   */
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  /**
   * Xoa het gio hang
   */
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  /**
   * Lưu danh sách vào localStorage
   */
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
