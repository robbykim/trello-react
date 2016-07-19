var React = require('react');
var ReactDOM = require('react-dom');

/* ------- Components --------- */
var Board = function(props) {
  var lists = [];
  for (var i = 0; i < props.listTitle.length; i++) {
    lists.push(<List title={props.listTitle[i]}/>);
  }
  return (
    <div className="board">
      <div className="board-name">{props.title}</div>
      <div className="list-list">{lists}</div>
    </div>
  );
};

var List = function(props) {
  var cards = [];
  for (var i = 0; i < 5; i++) {
    cards.push(
      <Card description={'I am card ' + (i + 1)} />
    );
  }
  return (
    <div className="list">
      <div className="list-title">{props.title}</div>
      <div className="card-holder">
        {cards}
      </div>
    </div>
  );
};

var Card = React.createClass({
   getInitialState: function() {
        return {
            highlight: false
        };
    },
   onClick: function() {
        this.setState({
            highlight: !this.state.highlight
        });
    },
    render: function() {
      var classes = 'card ' + (this.state.highlight ? 'highlight' : '');
      return (
        <div className={classes} onClick={this.onClick}>
          <div className="card-description">{this.props.description}</div>
        </div>
      );
  },
});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Board title="Trello Board"
                    listTitle={['List 1', 'List 2', 'List 3', 'List 4', 'List 5']}/>, document.getElementById('app'));
});
