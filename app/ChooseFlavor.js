var React = require('react-native');

var { Component, View } = React;

var Bubble = require('./Bubble');
var styles = require('../styles.js');

class ChooseFlavor extends Component {

  constructor() {
    super();
  }

  _handlePress(choice) {
    global.events.publish('choices_updated', {
      flavorChoice: choice
    });
    this.props.toRoute(global.routes.chooseSpice);
  }

  render() {

    var gw = global.words.get;
    // TODO: better mapping across global dictionary
    const HUNAN   = 'HUNAN';
    const SICHUAN = 'SICHUAN';
    const GARLIC  = 'GARLIC';

    return (
      <View style={ styles.page }>
        <View style={ styles.choices_row_1of2 }>
          <Bubble hanzi={ gw('zh', HUNAN)  } subtext={ gw('en', HUNAN)  } onPress={ this._handlePress.bind(this, HUNAN)   } />
          <Bubble hanzi={ gw('zh', SICHUAN)} subtext={ gw('en', SICHUAN)} onPress={ this._handlePress.bind(this, SICHUAN) } />
        </View>
        <View style={ styles.choices_row_2of2 }>
          <Bubble hanzi={ gw('zh', GARLIC) } subtext={ gw('en', GARLIC) } onPress={ this._handlePress.bind(this, GARLIC) } />
        </View>
      </View>
    );
  }

}
module.exports = ChooseFlavor;