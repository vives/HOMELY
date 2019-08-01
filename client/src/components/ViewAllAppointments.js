import React, { Component } from "react";
import { Container, Button, Table } from "reactstrap";
import { connect } from "react-redux";
import Admin from "./Admin.js";
import {
  getAppointments,
  deleteAppointment
} from "./../actions/makeAppointAction";
import PropTypes from "prop-types";

class ViewAllAppointments extends Component {
  componentDidMount() {
    this.props.getAppointments();
  }
  onDeleteClick = id => {
    this.props.deleteAppointment(id);
  };
  render() {
    const { appointments } = this.props.appointments;
    console.log(appointments);
    return (
      <div className="container">
        <Admin />;<h2 style={{ marginLeft: "40%" }}>APPOINTMENTS DETAILS</h2>
        <div className="main">
          <Container style={{ marginTop: "20px" }}>
            <Table style={{ border: "0" }}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Requested Date</th>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Address</th>

                  <th>Date and Time</th>
                  <th>Constraints</th>
                  <th>Work</th>
                  <th>Delete Appointment</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((rowData, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{rowData.rwgister_date}</td>
                    <td>{rowData._id}</td>
                    <td>{rowData.email}</td>
                    <td>{rowData.location}</td>
                    <td>
                      {rowData.address}
                      <br />
                      {rowData.city}
                      <br />
                      {rowData.city_state}
                      <br />
                      {rowData.zip}
                    </td>

                    <td>
                      {rowData.dataAndTime_OP01}
                      <br />
                      {rowData.dataAndTime_OP02}
                      <br />
                      {rowData.dataAndTime_OP03}
                    </td>
                    <td>{rowData.constraints}</td>
                    <td>{rowData.work}</td>
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
ViewAllAppointments.prototypes = {
  getAppointments: PropTypes.func.isRequired,
  appointments: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  appointments: state.appointments
});
export default connect(
  mapStateToProps,
  { getAppointments, deleteAppointment }
)(ViewAllAppointments);
