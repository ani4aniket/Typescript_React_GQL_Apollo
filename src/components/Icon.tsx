import * as React from "react";
import { TextStyle } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import AntDesign from "react-native-vector-icons/AntDesign";

export enum IconType {
  ANT_DESIGN = "AntDesign",
  ENTYPO = "Entypo",
  EVIL_ICONS = "EvilIcons",
  FEATHER = "Feather",
  FONT_AWESOME = "FontAwesome",
  FOUNDATION = "Foundation",
  ION_ICONS = "Ionicons",
  MATERIAL_ICONS = "MaterialIcons",
  MATERIAL_COMMUNITY_ICONS = "MaterialCommunityIcons",
  SIMPLE_LINE_ICONS = "SimpleLineIcons",
  OCTICONS = "Octicons",
  ZOCIAL = "Zocial"
}

interface Props {
  style?: TextStyle;
  color?: string;
  type: IconType;
  name: string;
}

const ExpoIcon: React.FunctionComponent<Props> = ({
  style,
  color,
  type,
  name
}) => {
  const commonProps = {
    name,
    style: style || { color: color || "#555" }
  };
  switch (type) {
    case IconType.ANT_DESIGN:
      return <AntDesign {...commonProps} />;
    case IconType.ENTYPO:
      return <Entypo {...commonProps} />;
    case IconType.EVIL_ICONS:
      return <EvilIcons {...commonProps} />;
    case IconType.FEATHER:
      return <Feather {...commonProps} />;
    case IconType.FONT_AWESOME:
      return <FontAwesome {...commonProps} />;
    case IconType.FOUNDATION:
      return <Foundation {...commonProps} />;
    case IconType.ION_ICONS:
      return <Ionicons {...commonProps} />;
    case IconType.MATERIAL_ICONS:
      return <MaterialIcons {...commonProps} />;
    case IconType.MATERIAL_COMMUNITY_ICONS:
      return <MaterialCommunityIcons {...commonProps} />;
    case IconType.SIMPLE_LINE_ICONS:
      return <SimpleLineIcons {...commonProps} />;
    case IconType.OCTICONS:
      return <Octicons {...commonProps} />;
    case IconType.ZOCIAL:
      return <Zocial {...commonProps} />;
    default:
      return null;
  }
};

export default ExpoIcon;
