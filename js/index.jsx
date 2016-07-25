var React = require('react');
var ReactDOM = require('react-dom');
var BoardContainer = require('./boardcontainer');

/* Runs when page is done loading. */
document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<BoardContainer />, document.getElementById('app'));
});
