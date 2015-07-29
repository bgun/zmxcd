/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React  = require('react-native');
var Router = require('react-native-router');
var _      = require('lodash');

var { AppRegistry, Component, Dimensions, Image, StyleSheet, Text, View, } = React;

var TrackerBar    = require('./app/TrackerBar');
var StartScreen   = require('./app/StartScreen');
var ChooseProtein = require('./app/ChooseProtein');
var ChooseStyle   = require('./app/ChooseStyle');
var ChooseFlavor  = require('./app/ChooseFlavor');
var ChooseSpice   = require('./app/ChooseSpice');
var ResultScreen  = require('./app/ResultScreen');

var events = require('./app/utils/events');
var styles = require('./styles.js');
var words  = require('./words.js');


class zmxcd extends Component {

  constructor() {
    super();

    global.events = events;
    global.words  = words;
    global.routes = {
      start: {
        name: 'Start',
        component: StartScreen,
        headerStyle: styles.page_header
      },
      chooseProtein: {
        name: 'Choose Protein',
        component: ChooseProtein,
        headerStyle: styles.page_header
      },
      chooseStyle: {
        name: 'Choose Style',
        component: ChooseStyle,
        headerStyle: styles.page_header
      },
      chooseFlavor: {
        name: 'Choose Flavor',
        component: ChooseFlavor,
        headerStyle: styles.page_header
      },
      chooseSpice: {
        name: 'Choose Spice',
        component: ChooseSpice,
        headerStyle: styles.page_header
      },
      result: {
        name: 'Result',
        component: ResultScreen,
        headerStyle: styles.page_header
      }
    }

    var default_state = {
      proteinChoice: '',
      styleChoice: '',
      flavorChoice: '',
      spiceChoice: ''
    }
    this.state = default_state;
    global.events.subscribe('choices_updated', this.updateTracker.bind(this));
    global.events.subscribe('choices_clear',   this.updateTracker.bind(this, default_state));
  }

  updateTracker(new_choices) {
    this.setState(new_choices);
  }

  render() {

    return (
      <View style={{ backgroundColor: '#FF0000', flex: 1 }}>
        <Router firstRoute={{
          name: 'Start',
          component: StartScreen,
          headerStyle: styles.page_header
        }} />
        <TrackerBar choices={ this.state } />
      </View>
    );

  }

}

var styles = require('./styles');

AppRegistry.registerComponent('zmxcd', () => zmxcd);
