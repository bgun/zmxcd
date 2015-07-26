/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var ChooseProtein = require('./app/ChooseProtein.js');

var { AppRegistry, Component, Dimensions, Image, Navigator, StyleSheet, Text, View, } = React;


class zmxcd extends Component {

  render() {

    return (
      <Navigator
        style={{ flex: 1 }}
        initialRoute={{
          title: 'First Page',
          index: 0
        }}
        renderScene={(route, navigator) =>
          <ChooseProtein
            name={ route.name }
            navigator={ navigator }
          />
        }
      />
    );

  }

}

var styles = require('./styles');

AppRegistry.registerComponent('zmxcd', () => zmxcd);
