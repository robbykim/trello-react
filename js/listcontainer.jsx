var React = require('react');
var List = require('./list');

/*------ HOLDS STATE FOR LIST COMPONENT -------*/
var ListContainer = React.createClass({
  getInitialState: function () {
    return {
      cards: [],
      text: '',
      counter: 0
    }
  },

  // TO DELETE A CARD IN THE LIST, TAKES AN ID ARG AND FILTERS THROUGH
  // CURRENT LIST OF CARDS TO FIND THE CORRECT ONE TO DELETE
  onDelClick: function (id) {
    var tempCardsArray = this.state.cards.filter(function(card) {
      return id !== card.counter;
    });
    this.setState({cards: tempCardsArray});
  },

  // TRACKS ANY CHANGES IN THE TEXT INPUT
  onAddInput: function (event) {
    this.setState({
      text: event.target.value
    });
  },

  // TO ADD NEW CARDS
  onAddClick: function (event) {
    event.preventDefault();

    // PREVENTS EMPTY TEXT INPUTS
    if (this.state.text !== '') {
      var cardObj = {
        description: this.state.text,
        counter: this.state.counter
      }
      // DEEP COPY OF STATE 'CARDS'
      var testCards = this.state.cards.slice();
      testCards.push(cardObj);

      // DEEP COPY OF STATE 'COUNTER'
      var tempCounter = this.state.counter + 1;
      this.setState({ cards: testCards,
                      text: '',
                      counter: tempCounter });
    }
  },

  render: function () {
    return <List key={this.state.counter}
             title={this.props.title}
             cards={this.state.cards}
             value={this.state.text}
             onAddClick={this.onAddClick}
             onDelClick={this.onDelClick}
             onAddInput={this.onAddInput} />
  }
});

module.exports = ListContainer;
