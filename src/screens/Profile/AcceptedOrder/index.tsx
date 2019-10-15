import * as React from "react";
import { Text, View, ScrollView } from "react-native";

import ChatProductDetailTile from "../../../components/ChatProductDetailTile";
import ChatDeliveryRewardTile from "../../../components/ChatDeliveryRewardTile";

import Header from "../../../components/Headers/Header";
import ProfileTravelerInfoTile from "../../../components/ProfileTravelerInfoTile";
import { HEADER } from "../../../utils/constants";

import styles from "./styles";

interface Props {}

const AcceptedOrder: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.ORDERS} />
    <ScrollView>
      <View style={styles.productDetailView}>
        <Text style={[styles.productDetailText, { marginLeft: 0 }]}>
          PRODUCT DETAILS
        </Text>
      </View>
      <ChatProductDetailTile
        price="79"
        heading="Product Name"
        imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
      />
      <View style={styles.productDetailView}>
        <Text style={[styles.productDetailText, { marginLeft: 0 }]}>
          ACCEPTED DELIVERY OFFER
        </Text>
      </View>
      <ChatDeliveryRewardTile
        reward="16"
        quantity="1"
        deliveryDate="16th Nov,2018"
        total="98.75"
        deliveryLocation="Mumbai,IN"
        airport="BOM"
      />
      <View style={styles.productDetailView}>
        <Text style={[styles.productDetailText, { marginLeft: 0 }]}>
          TRAVELER DETAILS
        </Text>
      </View>
      <ProfileTravelerInfoTile
        imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
        userName="Sachin"
        location="New York,USA"
        date="21 Nov,2018"
        rewardRequested="42.5"
        total="121.5"
      />
    </ScrollView>
  </View>
);

export default AcceptedOrder;
