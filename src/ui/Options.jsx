const React = require('react');
const Suggestions = require('./Suggestions.jsx');
const Tile = require('./Tile.jsx');

class Options extends React.Component {
  render() {
    return (
      <div className="options">
        <div className="options__suggestions">
          <Suggestions suggestions={ this.props.suggestions } />
        </div>
        <div className="options__products">
         <Tile />
         <Tile />
        </div>
      </div>
    );
  }
}

module.exports = Options;
