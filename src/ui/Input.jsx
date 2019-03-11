const React = require('react');

const Input = (props) => (
  <div className="input">
    <input className="input__field" type="text" onChange={ props.onChange } />
    <button className="input__cta" onClick={ props.onClick }>
      <span>Clear Suggestions</span>
    </button>
  </div>
);

module.exports = Input;
