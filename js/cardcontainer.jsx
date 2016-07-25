var React = require('react');
var Card = require('./card');

/*------ HOLDS STATE FOR CARD COMPONENT -------*/
var CardContainer = React.createClass({
  getInitialState: function () {
    return {
      highlight: false
    }
  },

  // EVENT LISTENER FOR CLICK TO HIGHLIGHT THE CORRESPONDING CARD
  onHighlight: function () {
    this.setState({
      highlight: !this.state.highlight
    });
  },

  render: function () {
    return (
      <Card key={this.props.id}
            id={this.props.id}
            description={this.props.description}
            onDelClick={this.props.onDelClick}
            onHighlight={this.onHighlight}
            highlight={this.state.highlight} />
    );
  }
});

module.exports = CardContainer;
