var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({

  page: {
    backgroundColor: '#AA0000',
    flex: 1,
    flexDirection: 'column'
  },

  start_page: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  start_header: {
    color: '#99AACC',
    fontSize: 50,
    paddingBottom: 40,
    textAlign: 'center'
  },
  start_button: {
    backgroundColor: '#AA0000',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200
  },
  start_button_text: {
    color: '#FFFFFF',
    fontSize: 15,
    height: 50,
    lineHeight: 35,
    textAlign: 'center',
  },
  start_instructions: {
    paddingTop: 50,
    textAlign: 'center'
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
    color: '#FFFFFF',
    flex: 0.7,
    fontFamily: 'Cochin',
    fontSize: 66,
    paddingTop: 10,
    textAlign: 'center'
  },
  bubble_hanzi_small: {
    color: '#FFFFFF',
    flex: 0.7,
    fontFamily: 'Cochin',
    fontSize: 50,
    paddingTop: 25,
    textAlign: 'center'
  },
  bubble_subtext: {
    color: '#FFFFFF',
    flex: 0.3,
    fontSize: 15,
    textAlign: 'center'
  },

  tracker_bar: {
    backgroundColor: '#DDDDDF',
    flex: 0.2,
    flexDirection: 'row',
    height: 80,
    justifyContent: 'center',
  },
  tracker_item: {
    backgroundColor: '#F3F4F8',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    height: 60,
    justifyContent: 'center',
    margin: 10,
    marginTop: 20,
    width: 60
  },
  tracker_item_text: {
    color: '#333335',
    fontSize: 25,
    textAlign: 'center',
  },

  result_page: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  result_text: {
    fontSize: 20,
    paddingBottom: 40,
    textAlign: 'center'
  }

});
