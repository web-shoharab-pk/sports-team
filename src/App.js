import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">

        </Route>
        <Route path="/users">

        </Route>
        <Route path="/">

        </Route>
      </Switch>
    </Router>
  );
};

export default App;