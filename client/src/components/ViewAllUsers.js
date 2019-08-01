import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";
import { connect } from "react-redux";
import { getUsers, deleteUser } from "./../actions/userActions";
import PropTypes from "prop-types";
import Admin from "./Admin.js";

class ViewAllUsers extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  onDeleteClick = id => {
    this.props.deleteUser(id);
  };
  render() {
    const { users } = this.props.users;
    console.log(users);
    return (
      <div className="container">
        <Admin />;
        <div className="main">
          <h2 style={{ marginLeft: "40%" }}>USER DETAILS</h2>
          <Container>
            <Table style={{ border: "0" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Registered Date</th>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Delete User</th>
                </tr>
              </thead>
              <tbody>
                {users.map((rowData, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{rowData.rwgister_date}</td>
                    <td>{rowData._id}</td>
                    <td>{rowData.fname}</td>
                    <td>{rowData.email}</td>
                    <td>{rowData.lname}</td>
                    <td>
                      <Button
                        className="remove-btn"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, rowData._id)}
                      >
                        &times;
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
      </div>
    );
  }
}
ViewAllUsers.prototypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  users: state.users
});
export default connect(
  mapStateToProps,
  { getUsers, deleteUser }
)(ViewAllUsers);
