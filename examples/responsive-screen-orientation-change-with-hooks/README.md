This is an example repository that contains a sample setup of react-native-responsive-screen package with support of device orientation changes.

# Setup

1. Change working directory to the project:
    - `cd examamples/responsive-screen-orientation-change-with-hooks`
1. Install the dependencies:
    - `yarn install`  or  `npm install`
1. Run the app in the emulator/simulator:
    - `yarn run android`  or  `npm run android`
    - `yarn run ios`  or  `npm run ios`

# Usage

This is a version of `responsive-screen-orientation-change` that is converted to use [React Hooks](https://reactjs.org/docs/hooks-intro.html).

To detect orientation change, there are 2 differences from the simple case:
* we add a listener function in every screen that supports orientation change (and a remove listener function respectively)
* we move the stylesheet creation inside the render function, so that the styles are recalculated whenever we detect an orientation change (and therefore trigger a re-render).

```javascript
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';

const Login () =>  {
  const [responsiveScreen, setResponsiveScreen] = useState();

  useEffect(() => {
    loc({setStateHook: setResponsiveScreen});  // sets up when mounted
    return () => rol();  // cleans up when unmounted
  }, []);

  const styles = getStyles(hp, wp);
  
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.myText}>Login</Text>
      </View>
    </View>
  );
}
export default Login

const getStyles = (hp, wp) => {
  return StyleSheet.create({
    container: { flex: 1 },
    textWrapper: {
      height: hp('70%'),
      width: wp('80%')
    },
    myText: { fontSize: hp('5%') }
  });
}
```
