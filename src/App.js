import React, { useState, useEffect } from "react";
import Help from "./components/Help";
import RecipePage from "./components/RecipePage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/ttc/protected_area">
            <RecipePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
