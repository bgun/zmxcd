var React = require('react-native');

var { Component, View } = React;

var ChooseStyle = require('./ChooseStyle');
var Bubble      = require('./Bubble');
var TrackerBar  = require('./TrackerBar');

var styles = require('../styles.js');

class ChooseProtein extends Component {

  constructor() {
    super();
  }

  handlePress() {
    this.props.toRoute({
      name: 'Choose Style',
      component: ChooseStyle,
      headerStyle: styles.page_header
    });
  }

  render() {
    return (
      <View style={ styles.page }>
        <View style={ styles.choices_row_1of2 }>
          <Bubble hanzi='猪' subtext='Pork' onPress={ this.handlePress.bind(this) } />
          <Bubble hanzi='牛' subtext='Beef' onPress={ this.handlePress.bind(this) } />
        </View>
        <View style={ styles.choices_row_2of2 }>
          <Bubble hanzi='鸡' subtext='Chicken' onPress={ this.handlePress.bind(this) } />
          <Bubble hanzi='豆腐' subtext='Tofu' onPress={ this.handlePress.bind(this) } />
        </View>
      </View>
    );
  }

}
module.exports = ChooseProtein;