const React = require('react');

class Suggestions extends React.Component {
  render() {
    return (
      <li>{ this.props.suggestion.term }</li>
    );
  }
}

module.exports = Suggestions;
