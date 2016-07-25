var React = require('react');
var CardContainer = require('./cardcontainer');

/*------ POPULATES CARDS ARRAY TO DISPLAY LIST COMPONENT -------*/
var List = React.createClass({
  render: function() {
    var cardsArr = [];

    // ITERATES THROUGH AND CREATES CARD COMPONENTS FOR 'CARDSARR'
    for (var i = 0; i < this.props.cards.length; i++) {
      cardsArr.push(<CardContainer key={this.props.cards[i].counter}
                      id={this.props.cards[i].counter}
                      description={this.props.cards[i].description}
                      onDelClick={this.props.onDelClick} />
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

module.exports = List;
