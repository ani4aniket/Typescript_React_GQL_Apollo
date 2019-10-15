import * as React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import styles from "./styles";
import { Color } from "csstype";

interface Props {
  onPress: () => void;
  value: string;
  color?: Color;
  backgroundColor?: Color;
  borderColor?: Color;
  style?: ViewStyle;
}

const MiniButton: React.FunctionComponent<Props> = ({
  onPress,
  value,
  color,
  backgroundColor,
  borderColor,
  style
}) => (
  <TouchableOpacity
    style={[
      styles.container,
      backgroundColor ? { backgroundColor } : null,
      borderColor ? { borderColor } : null,
      style ? style : null
    ]}
    onPress={onPress}
  >
    <Text style={[styles.text, color ? { color } : null]}>{value}</Text>
  </TouchableOpacity>
);

export default MiniButton;
