var React = require('react');
var ReactDOM = require('react-dom');

/* ------- Components --------- */
var Board = function (props) {

  var lists = [];
  for (var i = 0; i < props.listTitle.length; i++) {
    lists.push(<ListContainer title={props.listTitle[i]} />);
  }

  return (
    <div className="board">
      <div className="board-name">{props.title}</div>
      <div className="list-list">{lists}</div>
    </div>
  );
};

var ListContainer = React.createClass({
  getInitialState: function () {
    return {
      text: '',
      cards: [],
      counter: 0
    }
  },

  onDelClick: function (event, id) {
    var tempCardsArray = this.state.cards.filter(function(card) {
      console.log('card.props.id', card.props.id);
      return id !== card.props.id;
    });
    console.log('id', id);
    this.setState({cards: tempCardsArray});
  },

  onAddInputChange: function (event) {
    this.setState({text: event.target.value})
  },

  onAddClick: function (event) {
    event.preventDefault();
    console.log('this.state.text', this.state.text);
    var testCards = this.state.cards.slice();
    testCards.push(<Card description={this.state.text} id={this.state.counter} onDelClick={this.onDelClick} />)

    var tempCounter = this.state.counter + 1;
    console.log('testCards', testCards);
    this.setState({cards: testCards,
                   text: '', counter: tempCounter});
  },

  render: function () {
    return <List title={this.props.title}
      cards={this.state.cards}
      value={this.state.text}
      onAddInputChange={this.onAddInputChange}
      onAddClick={this.onAddClick} />
  }
});

var List = React.createClass({

  render: function() {
    return (
      <div className="list">
        <div className="list-title">{this.props.title}</div>
        <div className="card-holder">
          {this.props.cards}
        </div>
        <form>
          <input type="text" value={this.props.value} onChange={this.props.onAddInputChange} />
          <button type="submit" onClick={this.props.onAddClick}>+</button>
        </form>
      </div>
    );
  }
});

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
    onDelete: function(event) {
      event.stopPropagation();
      this.props.onDelClick(event, this.props.id);
    },
    render: function() {
      var classes = 'card ' + (this.state.highlight ? 'highlight' : '');
      return (
        <div className={classes} onClick={this.onClick}>
          <div className="card-description">{this.props.description}</div>
          <button onClick={this.onDelete}>-</button>
        </div>
      );
  },
});

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Board title="Trello Board"
                    listTitle={['List 1', 'List 2', 'List 3', 'List 4', 'List 5']}/>, document.getElementById('app'));
});
