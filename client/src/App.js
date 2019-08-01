import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import { Provider } from "react-redux";
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
import ViewAllUsers from "./components/ViewAllUsers";
import AdminNavBar from "./components/AdminNavBar";
import ViewAllAppointments from "./components/ViewAllAppointments";
import UserProfile from "./components/UserProfile";
import Admin from "./components/Admin";

import "./App.css";
import "./components/assets/css/css/bootstrap.css";
import "./components/assets/css/css/bootstrap.min.css";
import "./components/assets/css/css/custom.css";
import "./components/assets/css/css/animate.min.css";
import "./components/assets/css/css/userProfile.css";

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
            <Route path="/ViewAllUsers" exact component={ViewAllUsers} />
            <Route path="/AdminNavBar" exact component={AdminNavBar} />
            <Route path="/Admin" exact component={Admin} />
            <Route
              path="/ViewAllAppointments"
              exact
              component={ViewAllAppointments}
            />
            <Route path="/UserProfile" exact component={UserProfile} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </Provider>
    );
  }
}

export default App;
