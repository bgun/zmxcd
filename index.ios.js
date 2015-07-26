/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var Swiper = require('react-native-swiper');

var App = require('./app/app.js');
var styles = require('./styles.js');

var {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  Image,
  View,
} = React;

var app = new App();

var zmxcd = React.createClass({

  render: function() {

    return (
      <View style={styles.container}>

        <Image style={{ flex: 1 }} source={{ uri: 'http://i.imgur.com/q1WSsoj.png' }}>

          <Swiper style={styles.wrapper} height={ 300 } showsButtons={true}>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>

          <View style={styles.sometext}>
            <Text style={styles.welcome}>
              Hello { app.doStuff(5) }, welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+D or shake for dev menu
            </Text>
          </View>

        </Image>

      </View>
    );

  }

});

AppRegistry.registerComponent('zmxcd', () => zmxcd);
