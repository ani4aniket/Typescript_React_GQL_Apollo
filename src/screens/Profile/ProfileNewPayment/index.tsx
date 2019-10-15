import * as React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { HEADER } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";
import ProfileOptionTile from "../../../components/ProfileOptionTile";
import CardDetailTile from "../../../components/CardDetailTile";

interface Props {}

const ProfileNewPayment: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.PROFILE} />
    <ScrollView>
      <Text style={styles.paymentText}>PAYMENT METHOD</Text>
      <ProfileOptionTile country="India" />
      <Text style={styles.paymentText}>CARD DETAILS</Text>
      <CardDetailTile cardView />
      <TouchableOpacity style={styles.buttonGreyBackground}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGreenBackground}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

export default ProfileNewPayment;
