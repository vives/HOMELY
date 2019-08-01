import React, { Component } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { makeAppoint } from "./../actions/makeAppointAction";
import { clearErrors } from "./../actions/errorActions";

class MakeAnappo extends Component {
  state = {
    email: "",
    location: "",
    address: "",
    city: "",
    city_state: "",
    zip: "",
    dataAndTime_OP01: "",
    dataAndTime_OP02: "",
    dataAndTime_OP03: "",
    constraints: "",
    work: "",
    msg: null
  };
  static ProprTypes = {
    isMakeApponited: PropTypes.bool,
    error: PropTypes.object.isRequired,
    makeAppoint: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  componentDidUpdate(preProps) {
    const { error, isMakeApponited } = this.props;
    if (error !== preProps.error) {
      //Check for regiser error
      if (error.id === "MAKE_APPOINTMENT_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    if (isMakeApponited) {
      this.props.history.push("/");
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleChange = location => {
    this.setState({ location });
    // console.log(address);
  };
  handleSelect = location => {
    geocodeByAddress(location)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
    this.setState({ location });
  };
  onSubmit = e => {
    e.preventDefault();
    const {
      email,
      location,
      address,
      city,
      city_state,
      zip,
      dataAndTime_OP01,
      dataAndTime_OP02,
      dataAndTime_OP03,
      constraints,
      work
    } = this.state;
    const { user } = this.props.auth;
    //Create user object
    const makeAppoint = {
      email: `${user.email}`,
      location,
      address,
      city,
      city_state,
      zip,
      dataAndTime_OP01,
      dataAndTime_OP02,
      dataAndTime_OP03,
      constraints,
      work
    };
    //Attem To make appointment
    this.props.makeAppoint(makeAppoint);
  };
  render() {
    return (
      <div className="makean_container">
        <h3> Make Appoinment </h3>
        {this.state.msg ? (
          <div className="alert alert-primary" role="alert">
            {this.state.msg}
          </div>
        ) : null}
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <label>WHERE DO YOU NEED A HOMELY?</label>
            <PlacesAutocomplete
              value={this.state.location}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
              shouldFetchSuggestions={this.state.location.length >= 1}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading
              }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Search Places ...",
                      className: "location-search-input",
                      autoFocus: true
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
            <dev className="address_br">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="542 W. 15th Street"
                onChange={this.onChange}
              />
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                placeholder="New York"
                onChange={this.onChange}
              />
              <div className="C_row">
                <div className="col-50">
                  <label htmlFor="state">State</label>
                  <input type="text" name="city_state" placeholder="NY" />
                </div>
                <div className="col-50">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    name="zip"
                    placeholder={10001}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </dev>
            <label>WHEN SHOULD WE SEND SOMEONE?</label>
            <div className="dtpicker_all">
              <label>Option1:-</label>
              <input
                type="datetime-local"
                name="dataAndTime_OP01"
                onChange={this.onChange}
              />
              <label>Option2:-</label>
              <input
                type="datetime-local"
                name="dataAndTime_OP02"
                onChange={this.onChange}
              />
              <label>Option3:-</label>
              <input
                type="datetime-local"
                name="dataAndTime_OP03"
                onChange={this.onChange}
              />
            </div>

            <label>ARE THERE ANY TIMING CONSTRAINTS?</label>
            <textarea
              className="textarea_makeanappo"
              name="constraints"
              placeholder="Let us know about any timing constraints"
              style={{ height: "200px" }}
              defaultValue={""}
              onChange={this.onChange}
            />
            <label>WHAT DO YOU NEED DONE?</label>
            <textarea
              className="textarea_makeanappo"
              name="work"
              placeholder="Give us a brief description of the job you need completed. Don’t worry, the trade we match you with will be in touch to confirm all details before starting!"
              style={{ height: "200px" }}
              defaultValue={""}
              onChange={this.onChange}
            />
            <button type="submit" className="input_submit">
              Continue
            </button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isMakeApponited: state.appointments.isMakeApponited,
  error: state.error,
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { makeAppoint, clearErrors }
)(MakeAnappo);
