import * as React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface Props {
  country: string;
}

const ProfileOptionTile: React.FunctionComponent<Props> = ({ country }) => (
  <View style={styles.container}>
    <View style={styles.countryView}>
      <Text style={styles.countryText}>Country</Text>
      <Text style={styles.countryValueText}>{country}</Text>
    </View>
    <View style={styles.separationView} />
    <Text style={styles.paymentText}>PAYMENT METHOD</Text>
    <View style={styles.countryView}>
      <Text style={styles.countryText}>International Credit Card</Text>
    </View>
    <View style={styles.countryView}>
      <Text style={styles.countryText}>Paypal</Text>
    </View>
    <View style={styles.separationView} />
  </View>
);

export default ProfileOptionTile;
