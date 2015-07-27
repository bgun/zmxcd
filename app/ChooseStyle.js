var React = require('react-native');

var { Component, View } = React;

var Bubble = require('./Bubble.js');

var styles = require('../styles.js');

class ChooseStyle extends Component {

  constructor() {
    super();
  }

  _handlePress(choice) {
    global.events.publish('choices_updated', {
      styleChoice: choice
    });
    this.props.toRoute(global.routes.chooseFlavor);
  }

  render() {

    var gw = global.words.get;
    // TODO: better mapping across global dictionary
    const STEAMED = 'STEAMED';
    const NOODLES = 'NOODLES';
    const FRIED   = 'FRIED';

    return (
      <View style={ styles.page }>
        <View style={ styles.choices_row_1of2 }>
          <Bubble hanzi={ gw('zh', STEAMED) } subtext={ gw('en', STEAMED) } onPress={ this._handlePress.bind(this, STEAMED) } />
        </View>
        <View style={ styles.choices_row_2of2 }>
          <Bubble hanzi={ gw('zh', NOODLES) } subtext={ gw('en', NOODLES) } onPress={ this._handlePress.bind(this, NOODLES) } />
          <Bubble hanzi={ gw('zh', FRIED)   } subtext={ gw('en', FRIED)   } onPress={ this._handlePress.bind(this, FRIED) } />
        </View>
      </View>
    );
  }

}
module.exports = ChooseStyle;