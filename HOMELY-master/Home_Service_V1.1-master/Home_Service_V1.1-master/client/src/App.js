import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import ItemModal from "./components/ItemModal";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import store from "./store";
import { loadUser } from "./actions/authActions";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Footer from "./components/Footer";
import MakeAnappo from "./components/MakeAnappo";

import "./App.css";
import "./components/assets/css/css/bootstrap.css";
import "./components/assets/css/css/bootstrap.min.css";
import "./components/assets/css/css/custom.css";
import "./components/assets/css/css/animate.min.css";

import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;
const bootstrap = require("bootstrap");
console.log(bootstrap);
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavbar />
        <div className="content">
          <Switch>
            <Route path="/AboutUs" component={AboutUs} />
            <Route path="/Contact" component={Contact} />
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Logout" exact component={Logout} />
            <Route path="/Register" exact component={Register} />
            <Route path="/MakeAnappo" exact component={MakeAnappo} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </Provider>
    );
  }
}

export default App;
