var React = require('react-native');

var { Component, Text, TouchableHighlight, View } = React;

var styles = require('../styles.js');

class ResultScreen extends Component {

  _handlePress() {
    global.events.publish('choices_clear');
    this.props.reset();
  }

  render() {

    var result = 'show to waiter';

    return (
      <View style={ styles.result_page }>
        <Text style={ styles.result_text }>{ result }</Text>
        <View style={ styles.start_button }>
          <TouchableHighlight onPress={ this._handlePress.bind(this) }>
            <Text style={ styles.start_button_text }>Restart</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}
module.exports = ResultScreen;