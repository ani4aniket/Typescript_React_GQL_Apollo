import * as React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";

import styles from "./styles";

interface Props {
  productImage: string;
  userImage: string;
  onPress: () => void;
}

const ProfileTransitOrder: React.FunctionComponent<Props> = ({
  productImage,
  userImage,
  onPress
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image style={styles.productImage} source={{ uri: productImage }} />
    <Image style={styles.userImage} source={{ uri: userImage }} />
    <View style={styles.confirmationView}>
      <Text style={styles.confirmationText}>ENTER CONFIRMATION CODE</Text>
      <TextInput
        style={styles.confirmationTextInput}
        maxLength={5}
        keyboardType="numeric"
        placeholder="_ _ _ _ _"
      />
    </View>
  </TouchableOpacity>
);

export default ProfileTransitOrder;
