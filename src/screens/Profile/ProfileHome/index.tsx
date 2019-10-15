import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import { SCENES } from "../../../routes";

import ProfileInfoTile from "../../../components/ProfileInfoTile";
import ProfileIconView from "../../../components/ProfileIconView";

import styles from "./styles";

const PastTrips = require("../../../../assets/images/PastTrips.png");
const PayoutMethod = require("../../../../assets/images/PayoutMethod.png");
const YourOrders = require("../../../../assets/images/YourOrders.png");

interface Props {}

interface InvoiceState {}

class ProfileHome extends React.PureComponent<Props, InvoiceState> {
  state = {};

  componentDidMount() {
    // TODO: bring login screen if user not logged in
    Actions.push(SCENES.LOGIN);
  }

  navigateToProfileOrders = () => {
    Actions.push(SCENES.PROFILE_ORDERS);
  };

  navigateToPastTrips = () => {
    Actions.push(SCENES.PAST_TRIPS);
  };

  navigateToPayoutMethod = () => {
    Actions.push(SCENES.PAYOUT_METHOD);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerView}>
            <Text style={styles.locationText}>YOUR LOCATION</Text>
            <Text style={styles.locationValueText}>Mumbai, India</Text>
          </View>
          <View style={styles.separationView} />
          <View style={styles.profileIconView}>
            <ProfileIconView
              onPress={this.navigateToProfileOrders}
              imageSource={YourOrders}
              imageText="Your Orders"
            />
            <ProfileIconView
              onPress={this.navigateToPastTrips}
              imageSource={PastTrips}
              imageText="Past Trips"
            />
            <ProfileIconView
              onPress={this.navigateToPayoutMethod}
              imageSource={PayoutMethod}
              imageText="Payout Method"
            />
          </View>
          <View style={styles.separationView} />
          <Text style={styles.subHeadingText}>General</Text>
          <ProfileInfoTile
            firstTabText="Your information"
            secondTabText="Payment Method"
            redirectRouteFirst={SCENES.PROFILE_INFORMATION}
            redirectRouteSecond={SCENES.PAYMENT_METHOD}
          />
          <Text style={styles.subHeadingText}>Information</Text>
          <ProfileInfoTile
            firstTabText="Privacy policy"
            secondTabText="Terms of use"
          />
        </ScrollView>
      </View>
    );
  }
}

export default ProfileHome;
