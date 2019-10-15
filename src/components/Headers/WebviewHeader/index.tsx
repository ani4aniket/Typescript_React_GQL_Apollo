import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon, { IconType } from "../../Icon";

interface Props {
  value: string;
  onBackPress?: () => void;
}

const WebviewHeader: React.FunctionComponent<Props> = ({
  value,
  onBackPress
}) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.back} onPress={onBackPress}>
      <Icon
        style={styles.icon}
        name="md-arrow-back"
        type={IconType.ION_ICONS}
      />
    </TouchableOpacity>
    <Text style={styles.text}>{value}</Text>
  </View>
);

export default WebviewHeader;
