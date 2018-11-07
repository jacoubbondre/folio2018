import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./Home/home";
//import About from "./About";
import Work from "./Work/work";
import Brands from "./Brands/brands"
import './styles/main.less';
import {createStore} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
//
//<About path="/about/" />
//<Work path="/work/:id" />

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Router>
          <Home path="/" />
          <Work path="/work" />
          <Brands path="/work/:id" />
        </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));