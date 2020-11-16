import React from "react";
import {Switch, Route, Redirect} from "react-router-dom"
import ProductList from "./ProductList"
import Cart from "./Cart"
import ProductDetail from "./ProductDetail"

const Routes = ()=>{
return (
      <Switch>
        <Route exact path="/cart">
            <Cart />
        </Route>
        
        <Route exact path="/products/:id">
            <ProductDetail />
        </Route>
        
        <Route exact path="/">
            <ProductList />
        </Route>

        <Redirect to="/" />
      </Switch>
    );
  }

export default Routes;