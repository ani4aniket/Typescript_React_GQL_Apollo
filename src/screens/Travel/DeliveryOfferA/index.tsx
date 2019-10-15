import * as React from "react";
import { View, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { HEADER } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";
import { SCENES } from "../../../routes";
import Button from "../../../components/Button";
import colors from "../../../theme/colors";
import { imageArray } from "../../../theme/CommonStyles";
import PageHeader from "../../../components/PageHeader";
import { COLORS } from "../../../theme";
import OrderProfileTile from "../../../components/OrderProfileTile";
import DeliveryRewardTile from "../../../components/DeliveryRewardTile";
import TotalTile from "../../../components/Tiles/TotalTile";

interface Props {}

const _navigate = () => Actions.push(SCENES.DELIVERY_OFFER_B);

const DeliveryOfferA: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.DELIVERY_OFFERS} />
    <PageHeader color={COLORS.BUTTON.BG_PRIMARY} page={2} />
    <ScrollView style={styles.scroll}>
      <OrderProfileTile
        border
        brandName="Brand Name"
        productName="Product Name"
        price="79"
        images={imageArray}
        currency="$"
      />
      <DeliveryRewardTile />
      <TotalTile />
    </ScrollView>
    <Button
      onPress={_navigate}
      text="Review Offer"
      icon
      color={colors.BUTTON.BG_PRIMARY}
    />
  </View>
);

export default DeliveryOfferA;
