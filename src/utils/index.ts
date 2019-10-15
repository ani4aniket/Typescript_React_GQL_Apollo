/* eslint-disable import/prefer-default-export */
import { Platform, StatusBar } from "react-native";

import Dimensions from "./metrics";

export enum NETWORK_CALL_STATUS {
  PENDING = "pending",
  SUCCESS = "success",
  FAIL = "fail",
  NONE = "none"
}

export const getPlatform = () => {
  switch (Platform.OS) {
    case "android":
    case "ios":
      return Platform.OS;
    default:
      return "default";
  }
};

export const isIphoneX = () => {
  const X_WIDTH = 375;
  const X_HEIGHT = 812;

  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;

  return (
    (Platform.OS === "ios" &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      Dimensions.WIDTH === X_WIDTH &&
      Dimensions.HEIGHT === X_HEIGHT) ||
    (Dimensions.WIDTH === XSMAX_WIDTH && Dimensions.HEIGHT === XSMAX_HEIGHT)
  );
};

export const getStatusBarHeight = (skipAndroid = false) => {
  return Platform.select({
    ios: isIphoneX() ? 44 : 20,
    android: skipAndroid ? 0 : StatusBar.currentHeight,
    default: 0
  });
};
