/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Router = require('react-native-router');

var ChooseProtein = require('./app/ChooseProtein');
var TrackerBar    = require('./app/TrackerBar');

var styles = require('./styles.js');

var { AppRegistry, Component, Dimensions, Image, StyleSheet, Text, View, } = React;


class zmxcd extends Component {

  render() {

    return (
      <View style={{ backgroundColor: '#FF0000', flex: 1 }}>
        <Router firstRoute={{
          name: 'Choose Protein',
          component: ChooseProtein,
          headerStyle: styles.page_header
        }} />
        <TrackerBar />
      </View>
    );

  }

}

var styles = require('./styles');

AppRegistry.registerComponent('zmxcd', () => zmxcd);
