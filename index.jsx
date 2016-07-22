var React = require('react');
var ReactDOM = require('react-dom');

/* ------- Components --------- */
var BoardContainer = React.createClass({
  getInitialState: function () {
    return {
      listTitle: '',
      lists: [],
      counter: 0
    }
  },
  onAddInputChange: function (event) {
    this.setState({listTitle: event.target.value})
  },
  onAddClick: function (event) {
    event.preventDefault();
    var tempLists = this.state.lists.slice();
    tempLists.push(<ListContainer title={this.state.listTitle} id={this.state.counter}/>);
    var tempCounter = this.state.counter + 1;
    this.setState({
      listTitle: '',
      lists: tempLists,


      counter: tempCounter});
  },
  render: function () {
    return <Board title="Trello Board"
      onAddInputChange={this.onAddInputChange}
      onAddClick={this.onAddClick}
      lists={this.state.lists}
      listTitle={this.state.listTitle}
      />
  }
});

var Board = React.createClass({
  render: function() {
    return (
      <div className="board">
        <div className="board-name">{this.props.title}</div>
        <form>
          <input type="text" onChange={this.props.onAddInputChange}/>
          <button type="submit" onClick={this.props.onAddClick}>+</button>
        </form>
        <div className="list-list">{this.props.lists}</div>
      </div>
    );
  }
});

var ListContainer = React.createClass({
  getInitialState: function () {
    return {
      text: '',
      cards: [],
      counter: 0
    }
  },

  onDelClick: function (id) {
    var tempCardsArray = this.state.cards.filter(function(card) {
      return id !== card.props.id;
    });
    this.setState({cards: tempCardsArray});
  },

  onAddInputChange: function (event) {
    this.setState({text: event.target.value})
  },

  onAddClick: function (event) {
    event.preventDefault();
    var testCards = this.state.cards.slice();
    testCards.push(<Card description={this.state.text} id={this.state.counter} onDelClick={this.onDelClick} />)
    var tempCounter = this.state.counter + 1;
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
  render: function() {
    var classes = 'card ' + (this.state.highlight ? 'highlight' : '');
    return (
      <div className={classes} key={this.props.id} onClick={this.onClick}>
        <div className="card-description">{this.props.description}</div>
        <button onClick={() => this.props.onDelClick(this.props.id)}>-</button>
      </div>
    );
  },
});


/* Runs when page is done loading. */
document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<BoardContainer />, document.getElementById('app'));
});
