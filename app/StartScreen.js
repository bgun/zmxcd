var React = require('react-native');

var { Component, Text, TouchableHighlight, View } = React;

var styles = require('../styles.js');

class StartScreen extends Component {

  _handlePress() {
    this.props.toRoute(global.routes.chooseProtein);
  }

  render() {

    return (
      <View style={ styles.start_page }>
        <Text style={ styles.start_header }>中美新菜单</Text>
        <View style={ styles.start_button }>
          <TouchableHighlight onPress={ this._handlePress.bind(this) }>
            <Text style={ styles.start_button_text }>Start</Text>
          </TouchableHighlight>
        </View>
        <Text style={ styles.start_instructions }>
        </Text>
      </View>
    );
  }

}
module.exports = StartScreen;
