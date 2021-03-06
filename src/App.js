import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./Home/home";
import About from "./About/about";
import Contact from "./Contact/contact";
import Work from "./Work/work";
import Brands from "./Brands/brands"
import Navigation from "./components/Navigation/navigation";
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
        <Navigation />
        <Provider store={store}>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <Contact path="/contact" />
          <Work path="/work" />
          <Brands path="/work/:id" />
        </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));