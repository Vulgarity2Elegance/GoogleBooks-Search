import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Save from "./pages/Save";
import Navbar from "./components/Navbar"
import Title from "./components/Title"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Title />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Home} />
          <Route exact path="/save" component={Save} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

