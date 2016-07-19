var React = require('react');
var ReactDOM = require('react-dom');

/* ------- Components --------- */
var Board = function() {
  var lists = [];
  for (var i=0; i<5; i++) {
    lists.push(<List />);
  }
  return (
    <div className="board">{lists}</div>
  );
};

var List = function() {
  var cards = [];
  for (var i=0; i<5; i++) {
    cards.push(<Cards />);
  }
  return (
    <div className="list">{cards}</div> 
  );
};

var Cards = function() {
  var title = "I'm a card!"
  var description = "I'm a description for this card."
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', function () {
  console.log("loading content");
  ReactDOM.render(<Board />, document.getElementById('app'));
});
