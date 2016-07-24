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
    if (this.state.listTitle !== '') {
      var listObj = {
        title: this.state.listTitle,
        counter: this.state.counter
      }

      var tempLists = this.state.lists.slice();
      tempLists.push(listObj);
      var tempCounter = this.state.counter + 1;
      this.setState({
        listTitle: '',
        lists: tempLists,
        counter: tempCounter});
    }
  },
  render: function () {
    return <Board title="Trello Board"
      onAddInputChange={this.onAddInputChange}
      onAddClick={this.onAddClick}
      lists={this.state.lists}
      listTitle={this.state.listTitle}
      key={this.state.counter}
      />
  }
});

var Board = React.createClass({
  render: function() {
    var listArr = [];

    this.props.lists.forEach(function(list) {
      listArr.push(<ListContainer title={list.title} id={list.counter} />)
    });

    return (
      <div className="board">
        <div className="board-name">{this.props.title}</div>
        <form>
          <input type="text" onChange={this.props.onAddInputChange}/>
          <button type="submit" onClick={this.props.onAddClick}>+</button>
        </form>
        <div className="list-list">{listArr}</div>
      </div>
    );
  }
});

var ListContainer = React.createClass({
  getInitialState: function () {
    return {
      cards: [],
      text: '',
      counter: 0,
      highlight: false
    }
  },

  onHighlight: function() {
    this.setState({
      highlight: !this.state.highlight
    });
  },

  onDelClick: function (id) {
    var tempCardsArray = this.state.cards.filter(function(card) {
      return id !== card.counter;
    });
    this.setState({cards: tempCardsArray});
  },

  onAddInput: function (event) {
    this.setState({
      text: event.target.value
    });
  },

  onAddClick: function (event) {
    event.preventDefault();

    if (this.state.text !== '') {
      var cardObj = {
        description: this.state.text,
        counter: this.state.counter
      }

      var testCards = this.state.cards.slice();
      testCards.push(cardObj);
      var tempCounter = this.state.counter + 1;
      this.setState({cards: testCards,
                     text: '',
                     counter: tempCounter});
    }
  },

  render: function () {
    return <List title={this.props.title}
      cards={this.state.cards}
      value={this.state.text}
      onAddClick={this.onAddClick}
      onDelClick={this.onDelClick}
      onAddInput={this.onAddInput}
      onHighlight={this.onHighlight}
      highlight={this.state.highlight} />
  }
});

var List = React.createClass({
  render: function() {
    var cardsArr = [];

    for (var i = 0; i < this.props.cards.length; i++) {
      cardsArr.push(<Card id={this.props.cards[i].counter}
                          description={this.props.cards[i].description}
                          onDelClick={this.props.onDelClick}
                          onHighlight={this.props.onHighlight}
                          highlight={this.props.highlight} />
      );
    }

    return (
      <div className="list">
        <div className="list-title">{this.props.title}</div>
        <div className="card-holder">
          {cardsArr}
        </div>
        <form>
          <input type="text" value={this.props.value} onChange={this.props.onAddInput} />
          <button type="submit" onClick={this.props.onAddClick}>+</button>
        </form>
      </div>
    );
  }
});

var Card = React.createClass({
  render: function() {
    var classes = 'card ' + (this.props.highlight ? 'highlight' : '');
    return (
      <div className={classes} key={this.props.id} onClick={this.props.onHighlight}>
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
