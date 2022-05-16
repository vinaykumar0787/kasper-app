import React from "react";
import HomePage from './components/home_page';
import Navigation from "./navigation";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function AppRoute({ user }) {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" >
            <HomePage></HomePage>
          </Route>
        </Switch>
      </Router>
    );
  }