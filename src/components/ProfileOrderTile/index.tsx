import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

interface Props {
  heading: string;
  productInfo: string;
  imageUri: string;
  color: string;
  onPress: () => void;
}

const ProfileOrderTile: React.FunctionComponent<Props> = ({
  heading,
  imageUri,
  productInfo,
  color,
  onPress
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image style={styles.productImage} source={{ uri: imageUri }} />
    <View style={styles.productDetail}>
      <Text style={styles.productName}>{heading}</Text>
      <Text style={[styles.productInfo, { color }]}>{productInfo}</Text>
    </View>
  </TouchableOpacity>
);

export default ProfileOrderTile;
