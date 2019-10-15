import * as React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

interface Props {
  imageUri: string;
  userName: string;
  location: string;
  date: string;
  total: string;
  rewardFees: string;
  productPrice: string;
}

const OfferDetailsTile: React.FunctionComponent<Props> = ({
  imageUri,
  userName,
  location,
  date,
  productPrice,
  rewardFees,
  total
}) => (
  <View style={styles.container}>
    <View style={styles.profileView}>
      <Image style={styles.profileImage} source={{ uri: imageUri }} />
      <View style={styles.productDetail}>
        <Text style={styles.productName}>{userName}</Text>
        <Text style={styles.productInfo}>{location}</Text>
        <Text style={styles.productInfo}>{date}</Text>
      </View>
    </View>
    <View style={styles.rowView}>
      <Text style={styles.titleText}>Product Price</Text>
      <Text style={styles.inputView}>${productPrice}</Text>
    </View>
    <View style={styles.rowView}>
      <Text style={styles.titleText}>Travel Reward and Fees</Text>
      <Text style={styles.inputView}>${rewardFees}</Text>
    </View>
    <View style={styles.totalView}>
      <Text style={styles.totalText}>Estimated total</Text>
      <Text style={styles.totalText}>${total}</Text>
    </View>
    <Text style={styles.confirmText}>
      This payment will be on hold until we get delivery confirmation of your
      order.
    </Text>
  </View>
);

export default OfferDetailsTile;
