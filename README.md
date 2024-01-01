# Help with maintenance would be appreciated!
#### If interested please send me an email: zakriamuhammad3637@gmail.com

# Contents
* [The package](#react-native-responsive-hook)
* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [How do I know it works for all devices ?](#example)
* [License](#license)
* [Pull Requests](#pull)

# react-native-responsive-hook

[![npm version](https://badge.fury.io/js/react-native-responsive-hook.svg)](https://www.npmjs.com/package/react-native-responsive-hook)
[![npm](https://img.shields.io/npm/dm/react-native-responsive-hook.svg)]()

<i>react-native-responsive-hook</i> is a small library that provides simple methods so that React Native developers can code their UI elements to be responsive across different devices. No media queries needed. It extends the power of react-native-responsive-screen with custom hooks and additional functionalities including breakpoint detection.

Give it a try and make your development process simpler and more efficient!

Check out [this medium article](https://medium.com/react-native-training/build-responsive-react-native-views-for-any-device-and-support-orientation-change-1c8beba5bc23) to see the power of the library! 🚀

<img src="https://cdn-images-1.medium.com/max/800/1*BWpx3uRPlWByahoXA6M-BQ.jpeg" />

# Installation

`npm install react-native-responsive-hook --save`

# Usage
* Import the `useResponsive` hook from `react-native-responsive-hook`.
* Use `useResponsive` to get `wp`, `hp`, `isLandscape`, `isPortrait`, and `breakpointGroup`.
* Apply these values to your component styles for responsive and adaptive UI.

# Updates 🚀
* Latest version supports complete hook functionalities including orientation and breakpoint detection.

# Examples

## How to use `useResponsive` with complete hook functionalities

```javascript
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

const App = () => {
  const { isLandscape, wp, hp, breakpointGroup } = useResponsive();

  const styles = getStyles(isLandscape, wp, hp, breakpointGroup);

  return (
    <View style={styles.container}>
      <View style={styles.responsiveBox}>
        <Text style={styles.text}>Responsive Box - Adjusts based on orientation and screen size.</Text>
        <Text style={styles.text}>Current Breakpoint Group: {breakpointGroup}</Text>
      </View>
    </View>
  );
};

const getStyles = (isLandscape, wp, hp, breakpointGroup) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isLandscape ? 'lightblue' : 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  responsiveBox: {
    borderWidth: 2,
    borderColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: wp(84.5),
    height: hp(17),
    backgroundColor: breakpointGroup === 'group1' ? 'lightgreen' : 'lightcoral'
  },
  text: {
    color: 'white',
  }
});

export default App;
```

# How do I know it works for all devices ?

The solution is tested across a wide range of devices and ensures consistency in UI components across different screen sizes and orientations.

# License

MIT

# Pull Requests

Pull requests are welcome! Please make the PR to `development` branch though and not `master`. Thanks.
```