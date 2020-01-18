import React, { Component } from 'react';
import './AutoCompleteText.css';
import ResultsContainer from "../resultsContainer";

export default class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      text: ""
    };
  }


  onTextChanged = e => {
    let { countries } = this.props;
    let data = countries.map(({ Country }) => {
      return Country;
    })
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = data.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
  };

  suggestionsSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }

  renderSuggestions() {

    const { suggestions } = this.state;

    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map(item => (
          <li
            key={item}
            onClick={() => this.suggestionsSelected(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.state.text);
    const { text } = this.state;
    return (
      <div>
      <div className="AutoCompleteText">
        <input
          placeholder='Search For Countries'
          value={text}
          onChange={this.onTextChanged}
          type="text"
        />
        {this.renderSuggestions()}
      </div>
      <div>
       < ResultsContainer countrytoShow={this.state.text}/>
      </div>
      </div >
    );
  }
}