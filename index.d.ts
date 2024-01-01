declare module 'react-native-responsive-hook' {
  import { Component } from 'react';

  type UseResponsiveReturnType = {
    isLandscape: boolean;
    isPortrait: boolean;
    wp: (widthPercent: number | string) => number;
    hp: (heightPercent: number | string) => number;
    breakpointGroup: string;
  };
  
  export function widthPercentageToDP(widthPercent: string | number): number;
  export function heightPercentageToDP(heightPercent: string | number): number;
  export function listenOrientationChange(screenClassComponent: Component<any, any>): void;
  export function removeOrientationListener(): void;
  export function useResponsive(): UseResponsiveReturnType;
}
