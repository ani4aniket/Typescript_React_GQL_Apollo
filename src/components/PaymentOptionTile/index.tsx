import * as React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

interface Props {
  country: string;
  total: string;
}

const PaymentOptionTile: React.FunctionComponent<Props> = ({
  country,
  total
}) => (
  <View style={styles.container}>
    <View style={styles.countryView}>
      <Text style={styles.countryText}>Country</Text>
      <Text style={styles.countryValueText}>{country}</Text>
    </View>
    <View style={styles.separationView} />
    <View style={styles.countryView}>
      <Text style={styles.countryText}>International Credit Card</Text>
    </View>
    <View style={styles.countryView}>
      <Text style={styles.countryText}>Paypal</Text>
    </View>
    <View style={styles.totalView}>
      <Text style={styles.totalText}>Estimated total</Text>
      <Text style={styles.totalText}>${total}</Text>
    </View>
  </View>
);

export default PaymentOptionTile;
