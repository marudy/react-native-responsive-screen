// packages
import { Dimensions, PixelRatio } from 'react-native';

// Retrieve initial screen's width
let screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
let screenHeight = Dimensions.get('window').height;

/**
 * Converts provided width percentage to independent pixel (dp).
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = widthPercent => {
  // Parse string percentage input and convert it to number.
  const elemWidth = typeof widthPercent === "number" ? widthPercent : parseFloat(widthPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

/**
 * Converts provided height percentage to independent pixel (dp).
 * @param  {string} heightPercent The percentage of screen's height that UI element should cover
 *                                along with the percentage symbol (%).
 * @return {number}               The calculated dp depending on current device's screen height.
 */
const heightPercentageToDP = heightPercent => {
  // Parse string percentage input and convert it to number.
  const elemHeight = typeof heightPercent === "number" ? heightPercent : parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

/**
 * Identifies the current orientation of the screen.
 * @returns {string} 'portrait' or 'landscape'
 */
const currentOrientation = () => {
  return screenWidth < screenHeight ? 'portrait' : 'landscape';
}

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * NOTE: If using expo, check the "orientation" setting in app.json/app.config.json
 *       https://docs.expo.io/versions/v38.0.0/config/app/#orientation
 * @param {object} classComponent This Screen's class component this variable.
 *                                listenOrientationChange() needs it to invoke the class's setState
 *                                (this.setState()) method and trigger screen rerender.
 * @param {object} setStateHook A set-state function, typically from useState().
 *                              listenOrientationChange() calls it to set the state value and
 *                              trigger screen rerender.
 * @throws {Error} If neither or both of the params are set.  Must only set ONE of them.
 */
const listenOrientationChange = ({classComponentThis = null, setStateHook = null}) => {
  Dimensions.addEventListener('change', newDimensions => {
    // Retrieve and save new dimensions
    screenWidth = newDimensions.window.width;
    screenHeight = newDimensions.window.height;

    let orientation = {
      orientation: currentOrientation()
    };

    // Trigger screen's re-render with a state update of the orientation variable
    if (classComponentThis !== null && setStateHook === null) {
      classComponentThis.setState(orientation);
    } else if (setStateHook !== null && classComponentThis === null) {
      setStateHook(orientation);
    } else {
      throw new Error("Must set only ONE of classComponentThis or setStateHook");
    }
  });
};

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => {});
};

export {
  widthPercentageToDP,
  heightPercentageToDP,
  currentOrientation,
  listenOrientationChange,
  removeOrientationListener
};
