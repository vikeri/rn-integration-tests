'use strict';

var React = require('react-native');
var {
  Text,
  View,
  ScrollView
} = React;
var { TestModule } = React.NativeModules;

var PassingTest = React.createClass({
 
  componentDidMount() {
    TestModule.markTestCompleted();
  },

  render() {
    return (
      <View style={{backgroundColor: 'white', padding: 40}}>
        <Text>
          A test that Passes...
        </Text>
      </View>
    );
  }
});

PassingTest.displayName = 'PassingTest';

module.exports = PassingTest;
