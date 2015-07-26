var React = require('react-native');

var { Component, Text, TouchableHighlight, View } = React;

class Bubble extends Component {

  render() {
    return (
      <View style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}>
        <TouchableHighlight onPress={ this.props.onPress }>
          <Text style={{
            borderColor: '#333333',
            borderRadius: 50,
            borderWidth: 10,
            fontSize: 20,
            height: 120,
            textAlign: 'center',
            lineHeight: 70,
            width: 120
          }}>{ this.props.text }</Text>
        </TouchableHighlight>
      </View>
    )
  }

}
module.exports = Bubble;