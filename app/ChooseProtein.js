var React = require('react-native');

var { Component, View } = React;

var ChooseStyle = require('./ChooseStyle');
var Bubble = require('./Bubble');

class ChooseProtein extends Component {

  constructor() {
    super();
  }

  handlePress() {
    console.log(this.props.name);
    this.props.navigator.push({
      title: 'ChooseStyle',
      component: ChooseStyle
    });
  }

  render() {
    return (
      <View style={{ backgroundColor: '#EEEEEE', flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FFEEDD' }}>
          <Bubble text='Pork' onPress={ this.handlePress.bind(this) } />
          <Bubble text='Beef' />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', }}>
          <Bubble text='Chicken' />
          <Bubble text='Shrimp' />
        </View>
      </View>
    );
  }

}
module.exports = ChooseProtein;