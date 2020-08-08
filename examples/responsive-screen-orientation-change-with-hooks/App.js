// packages
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

const App = () => {
  const [responsiveScreen, setResponsiveScreen] = useState();

  useEffect(() => {
    listenOrientationChange({ setStateHook: setResponsiveScreen }); // sets up when mounted
    return () => removeOrientationListener(); // cleans up when unmounted
  }, []);

  let styles = getStyles(widthPercentageToDP, heightPercentageToDP);

  return (
    <View style={styles.container}>
      <View style={styles.responsiveBox}>
        <Text style={styles.text}>
          This box is always of 84.5% width and 17% height.
        </Text>
        <Text style={styles.text}>
          Test it by running this example repo in phones/ emulators with screens
          of various dimensions and pixel per inch (ppi).
        </Text>
      </View>
    </View>
  );
};

export default App;

const getStyles = (widthPercentageToDP, heightPercentageToDP) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    responsiveBox: {
      width: widthPercentageToDP('84.5%'),
      minHeight: heightPercentageToDP('17%'),
      borderWidth: 2,
      borderColor: 'orange',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    text: {
      color: 'white',
      paddingHorizontal: widthPercentageToDP('10%'),
    },
  });
};
