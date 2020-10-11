import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Search from "./pages/Search"
import Save from "./pages/Save"
import Navbar from "./components/Navbar";


class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <CssBaseline />
          <Navbar />
          <Route path="/" component={Search} />
          <Route path="/save" component={Save}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;

