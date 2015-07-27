var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({

  page: {
    backgroundColor: '#AA0000',
    flex: 1,
    flexDirection: 'column'
  },

  page_header: {
    backgroundColor: '#EE7700'
  },

  choices_row_1of2: {
    flex: 0.4,
    flexDirection: 'row',
    paddingTop: 40
  },
  choices_row_2of2: {
    flex: 0.4,
    flexDirection: 'row',
    paddingBottom: 40
  },

  choices_row_1of3: {},
  choices_row_2of3: {},
  choices_row_3of3: {},

  bubble: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  bubble_inner: {
    backgroundColor: 'rgba(255,255,0,0.3)',
    borderColor: '#333333',
    borderRadius: 60,
    height: 120,
    width: 120
  },
  bubble_text: {
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'column',
  },
  bubble_hanzi: {
    flex: 0.6,
    fontSize: 60,
    paddingTop: 20,
    textAlign: 'center'
  },
  bubble_hanzi_small: {
    flex: 0.6,
    fontSize: 45,
    paddingTop: 25,
    textAlign: 'center'
  },
  bubble_subtext: {
    flex: 0.4,
    fontSize: 15,
    textAlign: 'center'
  },

  tracker_bar: {
    backgroundColor: '#DDDDDD',
    flex: 0.2,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center'
  },

  tracker_item: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#AAAAAA',
    height: 60,
    margin: 10,
    marginTop: 20,
    width: 60
  }

});
