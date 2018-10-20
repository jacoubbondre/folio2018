import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./Home";
//import About from "./About";
//import Work from "./Work";
//
//<About path="/about/" />
//<Work path="/work/:id" />

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hello World</h1>
        </header>
        <Router>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));