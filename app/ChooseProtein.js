var React = require('react-native');

var { Component, View } = React;

var Bubble = require('./Bubble');

var styles = require('../styles.js');

class ChooseProtein extends Component {

  constructor() {
    super();
  }

  _handlePress(choice) {
    global.events.publish('choices_updated', {
      proteinChoice: choice
    });
    this.props.toRoute(global.routes.chooseStyle);
  }

  render() {

    var gw = global.words.get;
    // TODO: better mapping across global dictionary
    const PORK    = 'PORK';
    const BEEF    = 'BEEF';
    const CHICKEN = 'CHICKEN';
    const TOFU    = 'TOFU';

    return (
      <View style={ styles.page }>
        <View style={ styles.choices_row_1of2 }>
          <Bubble hanzi={ gw('zh', PORK)    } subtext={ gw('en', PORK)    } onPress={ this._handlePress.bind(this, PORK)    } />
          <Bubble hanzi={ gw('zh', BEEF)    } subtext={ gw('en', BEEF)    } onPress={ this._handlePress.bind(this, BEEF)    } />
        </View>
        <View style={ styles.choices_row_2of2 }>
          <Bubble hanzi={ gw('zh', CHICKEN) } subtext={ gw('en', CHICKEN) } onPress={ this._handlePress.bind(this, CHICKEN) } />
          <Bubble hanzi={ gw('zh', TOFU)    } subtext={ gw('en', TOFU)    } onPress={ this._handlePress.bind(this, TOFU)    } />
        </View>
      </View>
    );
  }

}
module.exports = ChooseProtein;