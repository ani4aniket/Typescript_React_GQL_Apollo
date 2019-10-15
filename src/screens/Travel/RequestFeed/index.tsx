import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import ChatProductDetailTile from "../../../components/ChatProductDetailTile";
import ChatDeliveryRewardTile from "../../../components/ChatDeliveryRewardTile";
import ChatDeliveryRequestedTile from "../../../components/ChatDeliveryRequestedTile";
import { HEADER } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";
import RequestTile from "../../../components/RequestTile";
import { SCENES } from "../../../routes";
import Button from "../../../components/Button";
import colors from "../../../theme/colors";
import { defaultProfileImage } from "../../../theme/CommonStyles";
import PageHeader from "../../../components/PageHeader";
import { COLORS } from "../../../theme";

interface Props {}

const _navigate = () =>
  Actions.push(SCENES.MANUAL_STEP_2_A, { type: "travel" });

const RequestFeed: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.REQUEST_FEED} />
    <PageHeader color={COLORS.BUTTON.BG_PRIMARY} page={1} />
    <ScrollView style={styles.scroll}>
      <Text style={styles.productDetailText}>PRODUCT DETAILS</Text>
      <ChatProductDetailTile
        price="79"
        heading="Product Name"
        imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
        onPress={_navigate}
      />
      <Text style={styles.productDetailText}>DELIVERY REWARD OFFERED</Text>
      <ChatDeliveryRewardTile
        reward="16"
        quantity="1"
        deliveryDate="16th Nov,2018"
        total="98.75"
        deliveryLocation="Mumbai,IN"
        airport="BOM"
      />
      <RequestTile
        requestTime="10 days"
        name="Ibrahim"
        uri={defaultProfileImage}
      />
      <Text style={styles.productDetailText}>DELIVERY REWARD REQUESTED</Text>
      <ChatDeliveryRequestedTile
        imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
        userName="Sachin"
        location="New York,USA"
        date="21 Nov,2018"
        rewardRequested="42.5"
        total="121.5"
      />
      <Text style={styles.productDetailText}>
        DELIVERY OFFERS BY OTHER TRAVELLERS
      </Text>
      <ChatDeliveryRequestedTile
        imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
        userName="Sachin"
        location="New York,USA"
        date="21 Nov,2018"
        rewardRequested="42.5"
        total="121.5"
      />
      <ChatDeliveryRequestedTile
        imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
        userName="Sachin"
        location="New York,USA"
        date="21 Nov,2018"
        rewardRequested="42.5"
        total="121.5"
      />
    </ScrollView>
    <Button
      onPress={_navigate}
      text="Add Delivery Reward"
      icon
      color={colors.BUTTON.BG_PRIMARY}
    />
  </View>
);

export default RequestFeed;
