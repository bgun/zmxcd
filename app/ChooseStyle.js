var React = require('react-native');

var { Component, View } = React;

var Bubble = require('./Bubble.js');

var styles = require('../styles.js');

class ChooseStyle extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={ styles.page }>
        <View style={ styles.choices_row_1of2 }>
          <Bubble hanzi='盖' subtext='Steamed' />
          <Bubble hanzi='面' subtext='Noodles' />
        </View>
        <View style={ styles.choices_row_2of2 }>
          <Bubble hanzi='炒' subtext='Pan-fried' />
        </View>
      </View>
    );
  }

}
module.exports = ChooseStyle;