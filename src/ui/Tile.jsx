const React = require('react');

class Tile extends React.Component {
  render() {
    return (
      <article className="tile">
        <header className="tile__header">
          <img src="https://via.placeholder.com/600x400" alt="" />
        </header>
        <div className="tile__body">
          <h1>Product Name</h1>
        </div>
        <footer className="tile__footer">
          <button>Add to Cart</button>
        </footer>
      </article>
    );
  }
}

module.exports = Tile;
