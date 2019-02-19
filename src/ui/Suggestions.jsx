const React = require('react');

class Suggestions extends React.Component {
  render() {
    return (
      <div className="suggestions">
        {
          (this.props.suggestions || []).map((el, i) => {
            return <li key={ `suggestion-${i}`}>{ el.term }</li>;
          })
        }
      </div>
    );
  }
}

module.exports = Suggestions;
