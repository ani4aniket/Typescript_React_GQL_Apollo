import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon, { IconType } from "../Icon";
import styles from "./styles";

interface Props {
  value: string;
  visible?: boolean;
  onPress: () => void;
}

const CategoryHeading: React.FunctionComponent<Props> = ({
  value,
  onPress,
  visible
}) =>
  visible ? (
    <View style={styles.nameView}>
      <Text style={styles.categoryText}>{value}</Text>
      <TouchableOpacity onPress={onPress}>
        <Icon
          type={IconType.ION_ICONS}
          name="md-close-circle"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  ) : null;

export default CategoryHeading;
