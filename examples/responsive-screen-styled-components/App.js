// packages
import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import styled from 'styled-components';
 
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ResponsiveBox>
          <DemoText>This box is always of 84.5% width and 17% height.</DemoText>
          <DemoText>Test it by running this example repo in phones/
            emulators with screens of various dimensions and pixel per inch (ppi).</DemoText>
        </ResponsiveBox>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: gray;
  align-items: center;
  justify-content: center;
`;

const ResponsiveBox = styled.View`
  width: ${widthPercentageToDP('84.5%')};
  height: ${heightPercentageToDP('17%')};
  border-width: 2;
  border-color: orange;
  flex-direction: column;
  justify-content: space-around; 
`;

const DemoText = styled.Text`
  color: white;
`;