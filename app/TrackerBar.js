var React = require('react-native');
var _     = require('lodash');

var { Component, Text, TouchableHighlight, View } = React;

var styles = require('../styles.js');

class TrackerBar extends Component {

  constructor() {
    super();
  }

  render() {

    var gw = global.words.get;

    var ch = this.props.choices || {};

    var protein_choice = gw('zh', ch.proteinChoice);
    var style_choice   = gw('zh', ch.styleChoice);
    var flavor_choice  = gw('zh', ch.flavorChoice);
    var spice_choice   = gw('zh', ch.spiceChoice);

    return (
      <View style={ styles.tracker_bar }>
        <View style={ styles.tracker_item }>
          <TouchableHighlight>
            <Text style={ styles.tracker_item_text }>{ protein_choice }</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.tracker_item }>
          <TouchableHighlight>
            <Text style={ styles.tracker_item_text }>{ style_choice }</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.tracker_item }>
          <TouchableHighlight>
            <Text style={ styles.tracker_item_text }>{ flavor_choice }</Text>
          </TouchableHighlight>
        </View>
        <View style={ styles.tracker_item }>
          <TouchableHighlight>
            <Text style={ styles.tracker_item_text }>{ spice_choice }</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

}
module.exports = TrackerBar;