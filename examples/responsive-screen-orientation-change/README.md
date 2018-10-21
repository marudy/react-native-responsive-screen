This is an example repository that contains a sample setup of react-native-responsive-screen package with support of device orientation changes.

# Usage

In order to detect orientation change, there are 2 differences from the simple case:
* we add a listener function in every screen that supports orientation change (and a remove listener function respectively)
* we move the stylesheet creation inside the render function, so that the styles are recalculated whenever we detect an orientation change (and therefore trigger a rerender).

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
  
  componentWillUnmount() {
    rol();
  }

  render() {
    const styles = StyleSheet.create({
      container: { flex: 1 },
      textWrapper: {
        height: hp('70%'),
        width: wp('80%')
      },
      myText: { fontSize: hp('5%') }
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
