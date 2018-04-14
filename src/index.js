// packages
import { Dimensions, PixelRatio } from 'react-native';

/**
 * Converts provided width percentage to independent pixel (dp).  
 * @param  {string} widthPercent The percentage of screen's width that UI element should cover
 *                               along with the percentage symbol (%).
 * @return {number}              The calculated dp depending on current device's screen width.
 */
const widthPercentageToDP = widthPercent => {
  // Always get the screen's width and not cache it within the app,
  // because they may change (i.e. device rotation).
  const screenWidth = Dimensions.get('window').width;

  // Parse string percentage input and convert it to number.
  const elemWidth = parseFloat(widthPercent);

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
  // Always get the screen's height and not cache it within the app,
  // because they may change (i.e. device rotation).
  const screenHeight = Dimensions.get('window').height;

  // Parse string percentage input and convert it to number.
  const elemHeight = parseFloat(heightPercent);

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

export {
  widthPercentageToDP,
  heightPercentageToDP
};
