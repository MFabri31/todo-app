import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Active from "./pages/Active";
import Completed from "./pages/Completed";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/active" component={Active} />
          <Route path="/completed" component={Completed} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
