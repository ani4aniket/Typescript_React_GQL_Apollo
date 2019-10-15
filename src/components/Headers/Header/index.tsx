import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import Icon, { IconType } from "../../Icon";
import styles from "./styles";

interface Props {
  heading: string;
}

const Header: React.FunctionComponent<Props> = ({ heading }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={Actions.pop}>
        <Icon
          type={IconType.ION_ICONS}
          name="ios-arrow-back"
          style={styles.headerIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headingText}>{heading}</Text>
    </View>
  );
};

export default Header;
