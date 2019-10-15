import * as React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { COLORS } from "../../theme";

interface Props {
  id: number;
  selectedId: number;
  tabText: string;
  selectedTabColor: string;
  onPress: () => void;
}

const ProfileTabTile: React.FunctionComponent<Props> = ({
  id,
  selectedId,
  tabText,
  selectedTabColor,
  onPress
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.container,
      { backgroundColor: id === selectedId ? selectedTabColor : COLORS.WHITE }
    ]}
  >
    <Text
      style={[
        styles.tabText,
        { color: id === selectedId ? COLORS.WHITE : "#9b9b9b" }
      ]}
    >
      {tabText}
    </Text>
  </TouchableOpacity>
);

export default ProfileTabTile;
