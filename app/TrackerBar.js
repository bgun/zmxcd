var React = require('react-native');

var { Component, Text, TouchableHighlight, View } = React;

var styles = require('../styles.js');

class TrackerBar extends Component {

  constructor() {
    super();
    this.state = {
      proteinChoice : '',
      styleChoice   : '',
      flavorChoice  : '',
      spiceChoice   : ''
    }
  }

  render() {
    return (
      <View style={ styles.tracker_bar }>
        <View style={ styles.tracker_item }>
          <TouchableHighlight>
            <Text>{ this.state.proteinChoice }</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.tracker_item }>
          <TouchableHighlight>
            <Text>{ this.state.styleChoice }</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.tracker_item }>
          <TouchableHighlight>
            <Text>{ this.state.flavorChoice }</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.tracker_item }>
          <TouchableHighlight>
            <Text>{ this.state.spiceChoice }</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}
module.exports = TrackerBar;