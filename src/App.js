import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  About,
  Cart,
  Checkout,
  Error,
  Products,
  SingleProduct,
} from "./pages";
// PrivateRoute,
function App() {
  return (
    <Router>
      <Navbar />

      <Sidebar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route exact path="/products">
          <Products />
        </Route>

        <Route path="/products/:id" exact children={<SingleProduct />} />

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
