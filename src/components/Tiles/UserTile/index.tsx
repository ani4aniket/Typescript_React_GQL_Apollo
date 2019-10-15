import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";

interface Props {
  onPress: () => void;
  uri: string;
  value: string;
}

const UserTile: React.FunctionComponent<Props> = ({ onPress, uri, value }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.userlistView}>
      <Image style={styles.userImageView} source={{ uri }} />
      <Text style={styles.userNameView}>{value}</Text>
    </View>
    <View style={styles.userSeparationView} />
  </TouchableOpacity>
);

export default UserTile;
