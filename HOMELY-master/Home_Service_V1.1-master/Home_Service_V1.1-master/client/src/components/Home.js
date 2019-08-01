import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.items = ["Plumbing", "Electrician", "Flooring", "Handyman Services"];
    this.state = {
      suggestions: [],
      text: ""
    };
  }
  onTextChanged = e => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };
  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }
  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length == 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }
  render() {
    const { text } = this.state;
    return (
      <div>
        <section className="content-1">
          <div className="container">
            <div className="row" />
            <h1>
              HOME MAINTENANCE.
              <br />
              WITHOUT THE HASSLE.
            </h1>
            <div className="input_home">
              <input
                type="text"
                name="search"
                onChange={this.onTextChanged}
                value={text}
                placeholder="What can we help you with?"
              />
              {this.renderSuggestions()}
            </div>
          </div>
        </section>
        {/* Content 2 */}
        <section className="content-2">
          <div className="container">
            <div className="row">
              <div className="slider-text-animation">
                <h2>Services</h2>
              </div>
            </div>
          </div>
        </section>
        {/* Promos */}
        <div className="container-fluid">
          <div className="row promo">
            <a href="#">
              <div className="col-md-3 promo-item1 item-1">
                <h3>Plumbing</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item2 item-2">
                <h3>Electrician</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item3 item-3">
                <h3>Flooring</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item4 item-4">
                <h3>Handyman Services</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item5 item-5">
                <h3>Lawn Maintenance</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item6 item-6">
                <h3>Painting</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item7 item-7">
                <h3>Snow Removal</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item8 item-8">
                <h3>Duct Cleaning</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item9 item-9">
                <h3>Roofing</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item10 item-10">
                <h3>Cleaning Services</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item11 item-11">
                <h3>Surveying</h3>
              </div>
            </a>
            <a href="#">
              <div className="col-md-3 promo-item12 item-12">
                <h3>Window Cleaning</h3>
              </div>
            </a>
          </div>
        </div>
        {/* /.container-fluid */}
        {/* Content 3 */}
        <section className="content-3">
          <div className="container" />
        </section>
      </div>
    );
  }
}

export default Home;
