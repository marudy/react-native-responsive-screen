// packages
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.responsiveBox}>
          <Text style={styles.text}>This box is always of 84.5% width and 17% height.</Text>
          <Text style={styles.text}>Test it by running this example repo in phones/
            emulators with screens of various dimensions and pixel per inch (ppi).</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  responsiveBox: {
    width: widthPercentageToDP('84.5%'),
    height: heightPercentageToDP('17%'),
    borderWidth: 2,
    borderColor: 'orange',
    flexDirection: 'column',
    justifyContent: 'space-around' 
  },
  text: {
    color: 'white'
  }
});
