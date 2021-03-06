const React = require('react');
const Input = require('./Input.jsx');
const Options = require('./Options.jsx');
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
      query: '',
    };

    // Bind
    this.clear = this.clear.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  render() {
    const options = this.state.suggestions.length
      ? <Options suggestions={ this.state.suggestions } />
      : '';

    return (
      <div className="search">
        <Input query={ this.state.query } onChange={ this.onChange } onClick={ this.clear } />
        { options }
      </div>
    );
  }

  onChange(e) {
    this.setState({ query: e.target.value });

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

  clear() {
    this.setState({ suggestions: [], query: '' });
  }

  fetchSuggestions(term) {
    return window.fetch(`${API_URL}/${term}`)
      .then((response) => response.json());
  }
}

module.exports = Search;
