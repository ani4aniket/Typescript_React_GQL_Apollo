import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from "./styles";
import { HEADER } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";

interface Props {}

const ProfilePayoutForm: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.PROFILE} />
    <ScrollView>
      <Text style={styles.payoutText}>PAYOUT OPTIONS</Text>
      <View style={styles.separationView} />
      <View style={styles.countryView}>
        <Text style={styles.countryText}>Account Country</Text>
        <TouchableOpacity style={styles.countryValueButton}>
          <Text style={styles.countryValueText}>India</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separationView} />
      <View style={styles.countryView}>
        <Text style={styles.countryText}>Bank Transfer</Text>
      </View>
      <View style={styles.countryView}>
        <Text style={styles.countryText}>Paypal</Text>
      </View>
      <View style={[styles.separationView, { marginTop: 30 }]} />
      <Text style={styles.payoutInfoText}>
        As a traveler, money will be transferred to you via your selected payout
        method within 7 - 10 business working days after the buyers confirms the
        delivery.
      </Text>
      <TextInput style={styles.inputText} placeholder="Required field 1" />
      <TextInput style={styles.inputText} placeholder="Required field 2" />
      <TextInput style={styles.inputText} placeholder="Required field 3" />
      <TextInput style={styles.inputText} placeholder="Required field 4" />
      <TouchableOpacity style={styles.saveView}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
      <View style={styles.separationView} />
      <Text style={styles.helpText}>
        If you are having any trouble regarding receiving your payment or
        selecting a payout method.
      </Text>
      <View style={styles.supportView}>
        <Text style={[styles.supportText, { color: "#707070" }]}>
          Please reach out to us on
        </Text>
        <Text style={[styles.supportText, { color: "#15baf8" }]}>
          payments@airbuk.com
        </Text>
      </View>
    </ScrollView>
  </View>
);

export default ProfilePayoutForm;
