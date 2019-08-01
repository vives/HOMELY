import React, { Component } from "react";
import { Link } from "react-router-dom";
import ViewAllUsers from "./ViewAllUsers";
import ViewAllAppointments from "./ViewAllAppointments";
class Admin extends Component {
  render() {
    return (
      <div>
        <div className="sidenav">
          <a>
            <Link to="/ViewAllUsers">Users</Link>
          </a>
          <a>
            <Link to="/ViewAllAppointments">Appointments</Link>
          </a>
        </div>
        <h1 style={{ marginLeft: "30%" }}>WELCOME TO ADMIN PANNEL</h1>
        <div className="main" />
      </div>
    );
  }
}

export default Admin;
