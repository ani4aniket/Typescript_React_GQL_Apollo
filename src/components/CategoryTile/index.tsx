import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import colors from "../../theme/colors";

interface Props {
  onPress: () => void;
  selected?: boolean;
  value: string;
}

const CategoryTile: React.FunctionComponent<Props> = ({
  onPress,
  selected,
  value
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={[
        styles.iconView,
        selected ? { shadowColor: colors.ORANGE } : null
      ]}
      onPress={onPress}
    />
    <Text style={[styles.text, selected ? { color: colors.ORANGE } : null]}>
      {value}
    </Text>
  </View>
);

export default CategoryTile;
