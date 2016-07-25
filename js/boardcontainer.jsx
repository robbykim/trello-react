var React = require('react');
var Board = require('./board');

/*---------- CREATING LISTS TO RENDER THE BOARD COMPONENT ----------*/
var BoardContainer = React.createClass({
  getInitialState: function () {
    return {
      title: '',
      lists: [],
      counter: 0
    }
  },

  // TRACKS CHANGES IN THE INPUT FIELD
  onAddInputChange: function (event) {
    this.setState({title: event.target.value})
  },

  // LISTENER FOR CLICKING ON '+' BUTTON
  onAddClick: function (event) {
    event.preventDefault();

    // PREVENTS EMPTY FIELD INPUTS
    if (this.state.title !== '') {

      // MAIN LIST OBJECT TEMPLATE
      var listObj = {
        title: this.state.title,
        counter: this.state.counter
      }

      // DEEP COPY OF STATE 'LISTS'
      var tempLists = this.state.lists.slice();
      tempLists.push(listObj);

      // DEEP COPY OF STATE 'COUNTER'
      var tempCounter = this.state.counter + 1;
      this.setState({
        title: '',
        lists: tempLists,
        counter: tempCounter});
    }
  },
  render: function () {
    return <Board name="Trello Board"
             onAddInputChange={this.onAddInputChange}
             onAddClick={this.onAddClick}
             lists={this.state.lists}
             title={this.state.title}
             key={this.state.counter} />
  }
});

module.exports = BoardContainer;
