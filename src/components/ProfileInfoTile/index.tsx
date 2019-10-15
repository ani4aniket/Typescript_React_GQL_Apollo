import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import styles from "./styles";

interface Props {
  firstTabText: string;
  secondTabText: string;
  redirectRouteFirst: string;
  redirectRouteSecond: string;
}

const ProfileInfoTile: React.FunctionComponent<Props> = ({
  firstTabText,
  secondTabText,
  redirectRouteFirst,
  redirectRouteSecond
}) => {
  const navigateToFirstRoute = () => {
    Actions.push(redirectRouteFirst);
  };

  const navigateToSecondRoute = () => {
    Actions.push(redirectRouteSecond);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigateToFirstRoute}
        style={styles.firstTabView}
      >
        <Text style={styles.firstTabText}>{firstTabText}</Text>
      </TouchableOpacity>
      <View style={styles.separationView} />
      <TouchableOpacity
        onPress={navigateToSecondRoute}
        style={styles.secondTabView}
      >
        <Text style={styles.secondTabText}>{secondTabText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileInfoTile;
