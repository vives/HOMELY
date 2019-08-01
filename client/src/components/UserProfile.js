import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Logout from "./auth/Logout";

class UserProfile extends Component {
  state = {
    isOpen: false
  };
  static propTypes = {
    auth: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    //  const token = localStorage.getItem("token");

    return (
      <div class="tabs">
        <div class="tab-button-outer">
          <ul id="tab-button">
            <li>
              <a href="#tab01">Tab 1</a>
            </li>
            <li>
              <a href="#tab02">Tab 2</a>
            </li>
            <li>
              <a href="#tab03">Tab 3</a>
            </li>
            <li>
              <a href="#tab04">Tab 4</a>
            </li>
            <li>
              <a href="#tab05">Tab 5</a>
            </li>
          </ul>
        </div>
        <div class="tab-select-outer">
          <select id="tab-select">
            <option value="#tab01">Tab 1</option>
            <option value="#tab02">Tab 2</option>
            <option value="#tab03">Tab 3</option>
            <option value="#tab04">Tab 4</option>
            <option value="#tab05">Tab 5</option>
          </select>
        </div>

        <div id="tab01" class="tab-contents">
          <h2>Tab 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos
            aliquam consequuntur, esse provident impedit minima porro!
            Laudantium laboriosam culpa quis fugiat ea, architecto velit ab,
            deserunt rem quibusdam voluptatum.
          </p>
        </div>
        <div id="tab02" class="tab-contents">
          <h2>Tab 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos
            aliquam consequuntur, esse provident impedit minima porro!
            Laudantium laboriosam culpa quis fugiat ea, architecto velit ab,
            deserunt rem quibusdam voluptatum.
          </p>
        </div>
        <div id="tab03" class="tab-contents">
          <h2>Tab 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos
            aliquam consequuntur, esse provident impedit minima porro!
            Laudantium laboriosam culpa quis fugiat ea, architecto velit ab,
            deserunt rem quibusdam voluptatum.
          </p>
        </div>
        <div id="tab04" class="tab-contents">
          <h2>Tab 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos
            aliquam consequuntur, esse provident impedit minima porro!
            Laudantium laboriosam culpa quis fugiat ea, architecto velit ab,
            deserunt rem quibusdam voluptatum.
          </p>
        </div>
        <div id="tab05" class="tab-contents">
          <h2>Tab 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quos
            aliquam consequuntur, esse provident impedit minima porro!
            Laudantium laboriosam culpa quis fugiat ea, architecto velit ab,
            deserunt rem quibusdam voluptatum.
          </p>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  null
)(UserProfile);
