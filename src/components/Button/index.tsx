import * as React from "react";
import { TouchableOpacity, Text, View, ViewStyle } from "react-native";
import styles from "./styles";
import Icon, { IconType } from "../Icon";

interface Props {
  text: string;
  color: string;
  icon?: boolean;
  style?: ViewStyle;
  onPress: () => void;
}

const Button: React.FunctionComponent<Props> = ({
  text,
  onPress,
  color,
  icon,
  style
}) => {
  return (
    <View style={[styles.buttonView, style]}>
      <TouchableOpacity
        style={{ ...styles.container, backgroundColor: color }}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
        {icon ? (
          <Icon
            type={IconType.ENTYPO}
            name="chevron-right"
            style={styles.icon}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
