var React = require('react-native');

var { Component, View } = React;

var Bubble = require('./Bubble.js');

class ChooseStyle extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FFEEDD' }}>
          <Bubble text='Rice' />
          <Bubble text='Noodles' />
        </View>
        <View style={{ flex: 1 }}>
          <Bubble text='Pan-fried' />
        </View>
      </View>
    );
  }

}
module.exports = ChooseStyle;