const React = require('react');
const Suggestions = require('./Suggestions.jsx');
const config = require('../../config');
const { api } = config;

const API_URL = api.getApiUrl();

class Search extends React.Component {
  constructor(props) {
    super(props);

    // Setup
    this.minChars = 3;
    this.state = {
      ...this.state,
      suggestions: [],
    };


    // Bind
    this.onChange = this.onChange.bind(this);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={ this.onChange } />
        <Suggestions suggestions={ this.state.suggestions } />
      </div>
    );
  }

  onChange(e) {
    if (e.target.value.length >= this.minChars) {
      this.fetchSuggestions(e.target.value)
        .then((response) => {
          this.setState({ suggestions: response });
        })
        .catch((e) => {
          console.error(e.message);
        });
    }
  }

  fetchSuggestions(term) {
    return window.fetch(`${API_URL}/${term}`)
      .then((response) => response.json());
  }
}

module.exports = Search;
