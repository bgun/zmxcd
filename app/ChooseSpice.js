var React = require('react-native');

var { Component, View } = React;

var Bubble = require('./Bubble');
var styles = require('../styles.js');

class ChooseSpice extends Component {

  constructor() {
    super();
  }

  _handlePress(choice) {
    global.events.publish('choices_updated', {
      spiceChoice: choice
    });
    this.props.toRoute(global.routes.result);
  }

  render() {

    var gw = global.words.get;
    // TODO: better mapping across global dictionary
    const MILD    = 'MILD';
    const SPICY   = 'SPICY';
    const VERYHOT = 'VERYHOT';

    return (
      <View style={ styles.page }>
        <View style={ styles.choices_row_1of2 }>
          <Bubble hanzi={ gw('zh', MILD)    }  subtext={ gw('en', MILD)    } onPress={ this._handlePress.bind(this, MILD)  } />
          <Bubble hanzi={ gw('zh', SPICY)   }  subtext={ gw('en', SPICY)   } onPress={ this._handlePress.bind(this, SPICY) } />
        </View>
        <View style={ styles.choices_row_2of2 }>
          <Bubble hanzi={ gw('zh', VERYHOT) }  subtext={ gw('en', VERYHOT) } onPress={ this._handlePress.bind(this, VERYHOT) } />
        </View>
      </View>
    );
  }

}
module.exports = ChooseSpice;