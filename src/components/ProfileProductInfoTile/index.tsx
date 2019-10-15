import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

interface Props {
  heading: string;
  imageUri: string;
  deliveryLocation: string;
  dueDate: string;
  depositedAmount: string;
  onPress: () => void;
}

const ProfileProductInfoTile: React.FunctionComponent<Props> = ({
  heading,
  imageUri,
  deliveryLocation,
  onPress,
  dueDate,
  depositedAmount
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image style={styles.productImage} source={{ uri: imageUri }} />
    <View style={styles.productDetail}>
      <Text style={styles.productName}>{heading}</Text>
      <Text style={styles.productInfo}>{deliveryLocation}</Text>
      <Text style={styles.productInfo}>{dueDate}</Text>
    </View>
    <View style={styles.depositView}>
      <Text style={styles.depositText}>Deposited Amount</Text>
      <Text style={styles.depositAmountText}>{depositedAmount}</Text>
    </View>
  </TouchableOpacity>
);

export default ProfileProductInfoTile;
