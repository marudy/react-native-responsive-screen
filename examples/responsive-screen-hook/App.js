// Import necessary packages
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useResponsive } from 'react-native-responsive-hook';

// Define the App component
const App = () => {
  const { styles } = useStyles(); // Use the hook to get styles

  return (
    <View style={styles.container}>
      <View style={styles.responsiveBox}>
        <Text style={styles.text}>Responsive Box - Adjusts based on orientation and screen size.</Text>
      </View>
    </View>
  );
};

// Define the useStyles hook
const useStyles = () => {
  const { isLandscape, isPortrait, wp, hp, breakpointGroup } = useResponsive(); // Destructure all properties from useResponsive
  
  // Utilize the hook values to create dynamic styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isLandscape ? 'lightblue' : 'gray', // Change background color based on orientation
      alignItems: 'center',
      justifyContent: 'center',
    },
    responsiveBox: {
      borderWidth: 2,
      borderColor: 'orange',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: isPortrait ? wp(85) : wp(50),  // Adjust width based on orientation
      height: hp(17),                       // Adjust height using hp function
      backgroundColor: getBackgroundColorByGroup(breakpointGroup) // Change box color based on breakpoint group
    },
    text: {
      color: 'white',
    }
  });

  return {styles};
};

function getBackgroundColorByGroup(breakpointGroup) {
  switch(breakpointGroup) {
    case 'group1': return 'lightgreen';
    case 'group2': return 'lightpink';
    case 'group3': return 'lightyellow';
    case 'group4': return 'lightcoral';
    case 'group5': return 'lightskyblue';
    case 'group6': return 'lightsteelblue';
    default: return 'white';
  }
}

export default App;
