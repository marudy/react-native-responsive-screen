This is an example repository that contains a sample setup of `react-native-responsive-screen` package.

# Setup

1. Change working directory to the project:
    - `cd examamples/responsive-screen`
1. Install the dependencies:
    - `npm install` 
1. Run the app in the emulator/simulator:
    - `npm start android`
    - `npm start ios`

# Usage
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
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup
  }
});

export default Login;
```
