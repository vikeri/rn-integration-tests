'use strict';

var React = require('react-native');
var {
  Text,
  View,
  ScrollView
} = React;
var { TestModule } = React.NativeModules;

var FailingTest = React.createClass({
 
  componentDidMount() {
    TestModule.markTestCompleted();
  },

  render() {
    return (
      <StrangeModule style={{backgroundColor: 'white', padding: 40}}>
        <Text>
          A test that Fails...
        </Text>
      </StrangeModule>
    );
  }
});

FailingTest.displayName = 'FailingTest';

module.exports = FailingTest;
