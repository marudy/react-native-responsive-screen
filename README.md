# react-native-responsive-screen

<i>react-native-responsive-screen</i> is a small library that provides 2 simple methods so that React Native developers can code their UI elements fully responsive. No media queries needed. It also provides an optional third method for screen orienation detection and automatic rerendering according to new dimensions.

It can be easily combined with other CSS libraries for React Native, i.e. [styled components](https://www.styled-components.com/) and [Expo framework](https://expo.io/) as well. Check out the [Usage](#usage) section below for more details.

Give it a try and make your life simpler!

<img src="https://cdn-images-1.medium.com/max/800/1*BWpx3uRPlWByahoXA6M-BQ.jpeg" />

# Inspiration

As web developers we are familiar with CSS percentage values. Unfortunately, percentages are not fully supported in React Native, at least not yet. There are CSS properties that do not support percentage values at all, although they do in “normal” web development (i.e. margin, border-width, border-radius etc).

This package provides a way to use percentages - the developer provides percentage stings as arguments and the methods calculate the “correct” independent pixel (dp) values for every different screen dynamically.

# Installation

`npm install react-native-responsive-screen --save`

# Usage

## 1. How to use with StyleSheet.create() and without orientation change support 
```javascript
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('80%')   // 80% of width device screen
  },
  myText: { fontSize: hp('5%') // End result looks like the provided UI mockup }
});

export default Login;
```

## 2. How to use with StyleSheet.create() and with orientation change support
In odrer to detect orientation change, there are 2 major differences from the previous case:
* we add a listener function in every screen that supports orientation change (and a remove listener function respectively)
* we move the stylesheet creation inside the render function, so that the styles are recalculated whenever we detect an orientation change (and therefore trigger a rerender).

When using this, make sure to monitor UI performance of your app in a real device on orienation change. Since the styles are calculated every time from scratch inside the render function, make sure it's nor affecting your performance, especially on complicated screens with many UI elements.

```javascript
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

class Login extends Component {
  componentDidMount() {
    lor(this);
  }
  
  componentWillUnMount() {
    rol();
  }

  render() {
    const styles = StyleSheet.create({
      container: { flex: 1 },
      textWrapper: {
        height: heightPercentageToDP('70%'), // 70% of height device screen
        width: widthPercentageToDP('80%')    // 80% of width device screen
      },
      myText: { fontSize: heightPercentageToDP('5%') // End result looks like the provided UI mockup }
    });
  
    return (
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
        </View>
      </View>
    );
  }
}

export default Login;
```

## 3. How to use with styled components
Same logic applies as above in case you want to use the package with or without orientation change support. Below se show a sample setup with styled compoments and without orientation change support.

```javascript
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from 'styled-components';

class Login extends Component {
  render() {
    return (
      <Container>
        <TextWrapper>
          <Login>Login</Login>
        </TextWrapper>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
`;

const TextWrapper = styled.View`
  height: ${hp('70%')};
  width: ${wp('80%')};
`;

const Login = styled.Text`
  font-size: ${hp('5%')};
`;

export default Login;
```



# How do I know it works for all devices ?

As mentioned in ["How to Develop Responsive UIs with React Native"](https://medium.com/building-with-react-native/how-to-develop-responsive-uis-with-react-native-1x03-a448097c9503) article, this solution is already in production apps and is tested with a set of Android, iOS emulators of different screen specs, in order to verify that we always have the same end result:

## Example:
The 4 blue tiles at the bottom half of the screen should take over 98% of the screen’s width in dp and 10% of the screen’s height in dp always:

### Smartphones
<img src="https://cdn-images-1.medium.com/max/800/1*aoIGDVNrcvIw_4NRqRtHTA.png" />
<img src="https://cdn-images-1.medium.com/max/800/1*Yl9k-Lxg9jxJ9g00qmRlIA.png" />
<img src="https://cdn-images-1.medium.com/max/800/1*rE43O18nt4_ECUvXr_fSZA.png" />

### Tablets
<img src="https://cdn-images-1.medium.com/max/800/1*3uJUPxITidUJAokwB8BokQ.png" />

# Licence

MIT
