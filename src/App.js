import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from './components/HomeComponents/HomeComponent';
import OrderDetailComponent from './components/OrderDetailComponents/OrderDetailComponent';
import ProductList from './components/ProductComponents/ProductList/ProductList';

import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeComponent />
        </Route>
        <Route path="/order-detail">
          <OrderDetailComponent />
        </Route>
        <Route path="/product-list">
          <ProductList />
        </Route>
      </Switch>
    </Router>
  );
};
