const React = require('react');
const Suggestion = require('./Suggestion.jsx');

class Suggestions extends React.Component {
  render() {
    return (
      <ul className="suggestions">
        {
          (this.props.suggestions || []).map((el, i) => {
            return <Suggestion key={ `suggestion-${i}` } suggestion={ el } />
          })
        }
      </ul>
    );
  }
}

module.exports = Suggestions;
