import { PixelRatio, useWindowDimensions } from 'react-native';

/**
 * Defines breakpoints for responsive design.
 */
export const breakpoints = {
  group1: [0, 399],
  group2: [400, 599],
  group3: [600, 767],
  group4: [768, 1007],
  group5: [1008, 1279],
  group6: [1280, 8192],
};

/**
 * Custom hook for handling responsive design in React Native applications.
 * @returns {Object} An object containing properties for responsive design.
 *   - isLandscape: A boolean indicating if the device is in landscape orientation.
 *   - isPortrait: A boolean indicating if the device is in portrait orientation.
 *   - wp: A function to convert width percentage to independent pixels.
 *   - hp: A function to convert height percentage to independent pixels.
 *   - breakpointGroup: A string indicating the current breakpoint group based on the device width.
 */
const useResponsive = () => {
  const { width, height } = useWindowDimensions();

  /**
   * Determines if the device is in landscape orientation.
   * @type {boolean}
   */
  const isLandscape = width > height;

  /**
   * Determines if the device is in portrait orientation.
   * @type {boolean}
   */
  const isPortrait = width < height;

  /**
   * Gets the current breakpoint group based on the device width.
   * @returns {string} The name of the current breakpoint group.
   */
  const getBreakpointGroup = () => {
    for (let group in breakpoints) {
      if (width >= breakpoints[group][0] && width <= breakpoints[group][1]) {
        return group;
      }
    }
  };

  /**
   * The current breakpoint group based on the device width.
   * @type {string}
   */
  const breakpointGroup = getBreakpointGroup();

  /**
   * Converts provided width percentage to independent pixel (dp).
   * @param  {number} widthPercent The percentage of screen's width that UI element should cover.
   * @returns {number} The calculated dp depending on the current device's screen width.
   */
  const wp = (widthPercent) => {
    const elemWidth = typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
  };

  /**
   * Converts provided height percentage to independent pixel (dp).
   * @param  {number} heightPercent The percentage of screen's height that UI element should cover.
   * @returns {number} The calculated dp depending on the current device's screen height.
   */
  const hp = (heightPercent) => {
    const elemHeight = typeof heightPercent === 'number' ? heightPercent : parseFloat(heightPercent);
    return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
  };

  return { isLandscape, isPortrait, wp, hp, breakpointGroup };
};

export default useResponsive;
