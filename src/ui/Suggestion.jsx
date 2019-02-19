const React = require('react');

class Suggestions extends React.Component {
  render() {
    return (
      <li className="suggestion">
        <p className="suggestion-text">
          <span className="suggestion-text__term">{ this.props.suggestion.term }</span>
          <span> in </span>
          <span className="suggestion-text__department">{ this.props.suggestion.in }</span>
        </p>
      </li>
    );
  }
}

module.exports = Suggestions;
