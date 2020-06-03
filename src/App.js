import React from 'react';
import {
	BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomeComponent from './components/HomeComponents/HomeComponent';
import OrderDetailComponent from './components/OrderDetailComponents/OrderDetailComponent';

import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeComponent}></Route>
        <Route path="/order_details" component={OrderDetailComponent}></Route>
      </Switch>
    </Router>
  );
};
