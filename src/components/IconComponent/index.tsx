import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import Icon, { IconType } from "../Icon";
import styles from "./styles";

interface Props {
  type: IconType;
  name: string;
  foreground: string;
  background: string;
  iconColor: string;
  onPress: () => void;
  value: string;
}

export { IconType };

export default ({
  type,
  name,
  foreground,
  background,
  iconColor,
  onPress,
  value
}: Props) => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.iconView,
        { borderColor: foreground, backgroundColor: background }
      ]}
    >
      <Icon
        type={type}
        name={name}
        style={{ ...styles.icon, color: iconColor }}
      />
    </TouchableOpacity>
    <Text style={styles.text}>{value}</Text>
  </View>
);
