import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

interface Props {
  productImage: string;
  userImage: string;
  deliveredOn: string;
  location: string;
  onPress: () => void;
}

const ProfileDeliveredOrder: React.FunctionComponent<Props> = ({
  productImage,
  userImage,
  onPress,
  deliveredOn,
  location
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.columnView}>
      <View style={styles.rowView}>
        <Image style={styles.productImage} source={{ uri: productImage }} />
        <Image style={styles.userImage} source={{ uri: userImage }} />
      </View>
      <Text style={styles.locationView}>{location}</Text>
    </View>
    <View style={styles.confirmationView}>
      <Text style={styles.confirmationText}>DELIVERED</Text>
      <Text style={styles.deliveryDateText}>on {deliveredOn}</Text>
    </View>
  </TouchableOpacity>
);

export default ProfileDeliveredOrder;
