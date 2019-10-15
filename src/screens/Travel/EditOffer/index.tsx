import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import ChatProductDetailTile from "../../../components/ChatProductDetailTile";
import ChatDeliveryRequestedTile from "../../../components/ChatDeliveryRequestedTile";
import { HEADER } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";
import RequestTile from "../../../components/RequestTile";
import { SCENES } from "../../../routes";
import Button from "../../../components/Button";
import colors from "../../../theme/colors";
import { defaultProfileImage } from "../../../theme/CommonStyles";
import DeliveryRewardTile from "../../../components/DeliveryRewardTile";
import TotalTile from "../../../components/Tiles/TotalTile";
import DeliveryDateTile from "../../../components/DeliveryDateTile";

interface Props {}

const _navigate = () => Actions.push(SCENES.OFFER_DETAILS);

const EditOffer: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.OFFER_MADE} />
    <ScrollView>
      <Text style={styles.productDetailText}>PRODUCT DETAILS</Text>
      <ChatProductDetailTile
        price="79"
        heading="Product Name"
        imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
        onPress={_navigate}
      />
      <View style={styles.border}>
        <DeliveryRewardTile />
      </View>
      <TotalTile disabled />
      <DeliveryDateTile />
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
    <Button text="Edit Offer" color={colors.BUTTON.BG_PRIMARY} />
  </View>
);

export default EditOffer;
