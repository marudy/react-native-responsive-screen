// packages
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
  currentOrientation,
  listenOrientationChange,
  removeOrientationListener,
} from 'react-native-responsive-screen';

const App = () => {
  const [responsiveScreen, setResponsiveScreen] = useState({});

  useEffect(() => {
    setResponsiveScreen({orientation: currentOrientation()});
    listenOrientationChange({setStateHook: setResponsiveScreen}); // sets up when mounted
    return () => removeOrientationListener(); // cleans up when unmounted
  }, []);

  let styles = getStyles(widthPercentageToDP, heightPercentageToDP, responsiveScreen.orientation);

  return (
    <View style={styles.container}>
      {responsiveScreen.orientation && (
        <Text style={styles.title}>{responsiveScreen.orientation}</Text>
      )}
      <View style={styles.responsiveBox}>
        <Text style={styles.text}>This box is always of 84.5% width and 17% height.</Text>
        <Text style={styles.text}>
          Test it by running this example repo in phones/ emulators with screens
          of various dimensions and pixel per inch (ppi).
        </Text>
      </View>
    </View>
  );
};

export default App;

const getStyles = (widthPercentageToDP, heightPercentageToDP, orientation) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: orientation === 'landscape' ? 'steelblue' : 'gray',
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
    title: {
      fontSize: widthPercentageToDP('7.5%'),
    },
  });
};
