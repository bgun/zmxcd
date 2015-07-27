var React = require('react-native');

var { Component, Text, TouchableHighlight, View } = React;

var styles = require('../styles.js');

class Bubble extends Component {

  render() {
    return (
      <View style={ styles.bubble }>
        <TouchableHighlight activeOpacity={ 10 } underlayColor={ '#FF8800' } onPress={ this.props.onPress } style={ styles.bubble_inner }>
          <View style={ styles.bubble_text }>
            <Text style={ this.props.hanzi.length === 1 ? styles.bubble_hanzi : styles.bubble_hanzi_small }>{ this.props.hanzi }</Text>
            <Text style={ styles.bubble_subtext }>{ this.props.subtext }</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

}
module.exports = Bubble;