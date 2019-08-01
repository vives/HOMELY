import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";

class MakeAnappo extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = address => {
    this.setState({ address });
    console.log(address);
  };
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
    this.setState({ address });
  };
  render() {
    return (
      <div className="makean_container">
        <h3> Make Appoinment </h3>
        <label>WHERE DO YOU NEED A HOMELY?</label>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          shouldFetchSuggestions={this.state.address.length >= 1}
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
            id="adr"
            name="address"
            placeholder="542 W. 15th Street"
          />
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" placeholder="New York" />
          <div className="C_row">
            <div className="col-50">
              <label htmlFor="state">State</label>
              <input type="text" id="state" name="state" placeholder="NY" />
            </div>
            <div className="col-50">
              <label htmlFor="zip">Zip</label>
              <input type="text" id="zip" name="zip" placeholder={10001} />
            </div>
          </div>
        </dev>
        <label>WHEN SHOULD WE SEND SOMEONE?</label>
        <div className="dtpicker_all">
          <label>Option1:-</label>
          <input type="datetime-local" />
          <label>Option2:-</label>
          <input type="datetime-local" />
          <label>Option3:-</label>
          <input type="datetime-local" />
        </div>

        <label>ARE THERE ANY TIMING CONSTRAINTS?</label>
        <textarea
          className="textarea_makeanappo"
          id="subject"
          name="subject"
          placeholder="Let us know about any timing constraints"
          style={{ height: "200px" }}
          defaultValue={""}
        />
        <label>WHAT DO YOU NEED DONE?</label>
        <textarea
          className="textarea_makeanappo"
          id="subject"
          name="subject"
          placeholder="Give us a brief description of the job you need completed. Don’t worry, the trade we match you with will be in touch to confirm all details before starting!"
          style={{ height: "200px" }}
          defaultValue={""}
        />
        <button type="submit" className="input_submit">
          Continue
        </button>
      </div>
    );
  }
}

export default MakeAnappo;
