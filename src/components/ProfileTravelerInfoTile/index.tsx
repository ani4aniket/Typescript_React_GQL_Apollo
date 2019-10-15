import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

interface Props {
  imageUri: string;
  userName: string;
  location: string;
  date: string;
  others: boolean;
}

const ProfileTravelerInfoTile: React.FunctionComponent<Props> = ({
  imageUri,
  userName,
  location,
  date,
  others
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
    <TouchableOpacity style={styles.buttonYellowBackground}>
      <Text style={styles.buttonText}>Message Traveler</Text>
    </TouchableOpacity>
    {others ? <View style={styles.offerView} /> : null}
  </View>
);

export default ProfileTravelerInfoTile;
