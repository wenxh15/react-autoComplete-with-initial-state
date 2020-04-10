import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    value: "",
    stateList: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island ",
      "South Carolina ",
      "South Dakota ",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming"
    ],
    dropdown: []
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      value: value
    });

    this.showDropdown(value);
  };

  handleClick = item => {
    this.setState({
      value: item,
      dropdown: []
    });
  };

  showDropdown = value => {
    let suggestion = [];
    const { stateList } = this.state;
    if (value) {
      let template = new RegExp(`^${value}`, "i");

      suggestion = stateList.filter(item => template.test(item));
      // console.log(suggestion, "suggestion");
    }
    this.setState({
      dropdown: suggestion
    });
  };

  get renderDropdown() {
    const { dropdown } = this.state;
    return dropdown.map((item, index) => (
      <div key={index} onClick={() => this.handleClick(item)}>
        <p key={index}>{item}</p>
      </div>
    ));
  }

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <input
          placeholder="autoComplete"
          value={value}
          onChange={this.handleChange}
        />
        {this.renderDropdown}
      </div>
    );
  }
}
