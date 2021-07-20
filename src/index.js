import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";
import "./index.css";
// import { UserProvider } from "./context/user_context";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
