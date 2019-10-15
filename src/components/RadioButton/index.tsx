import * as React from "react";
import { View, ViewStyle } from "react-native";

import styles from "./styles";
import { Color } from "csstype";

interface Props {
  selected: boolean;
  color: Color;
  style: ViewStyle;
}

const RadioButton: React.FunctionComponent<Props> = ({
  selected,
  color,
  style
}) => (
  <View
    style={[
      styles.container,
      style,
      { borderColor: selected ? color : "#666" }
    ]}
  >
    {selected ? (
      <View style={[styles.radio, { backgroundColor: color }]} />
    ) : null}
  </View>
);
export default RadioButton;
