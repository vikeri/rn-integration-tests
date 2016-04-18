# React Native Integration Testing
This is intended to be a minimal example of how to do integration testing in
React Native.

Only iOS at the moment.

There are two kinds of integration tests.
1. Tests that are defined in Objective-C: [IntegrationTestsObjC](ios/RNIntegrationTestExampleTests/IntegrationTestsObjC.m)
2. Tests that are defined in JS: [IntegrationTestsJS](ios/RNIntegrationTestExampleTests/IntegrationTestsJS.m)

All the relevant test files are in two directories:

- `IntegrationTests`: JS
- `ios/RNIntegrationTestExampleTests`: Objective-C

The JS-tests are included in both JS and Objective-C

`ios/RNIntegrationTestExampleTests/IntegrationTestsJS.m`
```objective-c
56 // This list should be kept in sync with IntegrationTestsApp.js
57 RCT_TEST(IntegrationTestHarnessTest);
58 RCT_TEST(PassingTest);
59 // RCT_TEST(FailingTest);
```

`IntegrationTests/IntegrationTestsApp.js`
```js
13 // Keep this list in sync with IntegrationTestsJS.m
14 var TESTS = [
15   require('./IntegrationTestHarnessTest'),
16   require('./PassingTest.js'),
17   require('./FailingTest.js'),
18 ];
```

## Install

Requirements:
- XCode
- xctool (`brew install xctool`)

```bash
git clone https://github.com/vikeri/rnintegrationtestexample
cd RNIntegrationTestExample
npm install
```

## Run tests
```
npm test
```
If you want to customize how the tests are run, edit the `./scripts/test`

## Develop tests

It might be easier to develop the tests inside React Native directly.

```
react-native run-ios
```


## TODO

- [ ] Run tests continuously, eg. rerun test with code change

## Contribution

Yes please!

Pull requests and or discussions welcome.


## License

MIT License