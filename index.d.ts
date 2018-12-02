declare module 'react-native-responsive-screen' {
  import { Component } from 'react';

  export function widthPercentageToDP(widthPercent: string): number;
  export function heightPercentageToDP(widthPercent: string): number;
  export function listenOrientationChange(screenClassComponent: Component<any, any>): void;
  export function removeOrientationListener(): void;
}
