var React = require('react');

/*------ RENDERS THE CARD COMPONENT -------*/
var Card = React.createClass({
  render: function() {
    // ADDS CLASS BASED ON 'HIGHLIGHT' STATE CHANGED IN CARDCONTAINER
    var classes = 'card ' + (this.props.highlight ? 'highlight' : '');
    return (
      <div className={classes} onClick={this.props.onHighlight}>
        <div className="card-description">{this.props.description}</div>
        <button onClick={() => this.props.onDelClick(this.props.id)}>-</button>
      </div>
    );
  },
});

module.exports = Card;
