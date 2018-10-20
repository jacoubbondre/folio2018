import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./Home/home";
import './styles/main.less';
import {createStore} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
//import About from "./About";
//import Work from "./Work";
//
//<About path="/about/" />
//<Work path="/work/:id" />

const store = createStore(rootReducer);

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

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));