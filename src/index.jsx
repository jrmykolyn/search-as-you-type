const React = require('react');
const ReactDOM = require('react-dom');

const { Search } = require('./ui');

const targetElems = document.querySelectorAll('.target');

// Mount X Search components, where X is the number of 'target' nodes.
if (targetElems) {
  for (let i = 0, x = targetElems.length; i < x; i++) {
    ReactDOM.render(
      <Search />,
      targetElems[i]
    );
  }
}

