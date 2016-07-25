var React = require('react');
var ListContainer = require('./listcontainer');
/*------ POPULATES BOARD HTML WITH PROPER LISTS -------*/
var Board = React.createClass({
  render: function() {
    var listArr = [];
    // CALLS LISTCONTAINER COMPONENT TO CREATE LIST AND PUSHES TO LISTARR
    this.props.lists.forEach(function(list) {
      listArr.push(<ListContainer key={list.counter} title={list.title} id={list.counter}/>);
    });
    return (
      <div className="board">
        <div className="board-name">{this.props.name}</div>
        <form>
          <input type="text" onChange={this.props.onAddInputChange}/>
          <button type="submit" onClick={this.props.onAddClick}>+</button>
        </form>
        <div className="list-list">{listArr}</div>
      </div>
    );
  }
});
module.exports = Board;
