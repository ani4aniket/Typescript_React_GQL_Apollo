import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import ExpoIcon, { IconType } from "../Icon";

interface Props {
  imageUri: string;
  cardNo: string;
  expiry: string;
}

const ProfilePaymentTile: React.FunctionComponent<Props> = ({
  imageUri,
  cardNo,
  expiry
}) => (
  <TouchableOpacity style={styles.container}>
    <TouchableOpacity style={styles.threeDotView}>
      <ExpoIcon
        style={styles.threeDotIcon}
        color="#9b9b9b"
        type={IconType.ENTYPO}
        name="dots-three-horizontal"
      />
    </TouchableOpacity>
    <Text style={styles.cardNoView}>{cardNo}</Text>
    <View style={styles.rowView}>
      <Image style={styles.cardImage} source={{ uri: imageUri }} />
      <View style={styles.expiryRowView}>
        <Text style={styles.expiryText}>Expiry</Text>
        <Text style={styles.expiryTextValue}>{expiry}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
export default ProfilePaymentTile;
