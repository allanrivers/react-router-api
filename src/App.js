import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Api from "./components/Api";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/api" component={Api} />
          <Route path="/about/:name" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
