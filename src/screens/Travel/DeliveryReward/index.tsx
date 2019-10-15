import * as React from "react";
import { View, ScrollView, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { HEADER, DESCRIPTIONS } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";
import { SCENES } from "../../../routes";
import Button from "../../../components/Button";
import colors from "../../../theme/colors";
import { imageArray } from "../../../theme/CommonStyles";
import PageHeader from "../../../components/PageHeader";
import { COLORS } from "../../../theme";
import OrderProfileTile from "../../../components/OrderProfileTile";

interface Props {}

const _navigate = () => Actions.push(SCENES.DELIVERY_OFFER_B);

const DeliveryOfferA: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.ADD_DELIVERY_REWARD} />
    <PageHeader color={COLORS.BUTTON.BG_PRIMARY} page={3} />
    <ScrollView style={styles.scroll}>
      <OrderProfileTile
        border
        brandName="Brand Name"
        productName="Product Name"
        price="79"
        images={imageArray}
        currency="$"
      />
      <View style={styles.messageBody}>
        <Text style={styles.text}>MESSAGE TO BUYER</Text>
        <Text style={styles.description}>
          {DESCRIPTIONS.DELIVERY_REWARD_MESSAGE}
        </Text>
      </View>
      <View>
        <Text style={styles.policyText}>{DESCRIPTIONS.POLICY_A}</Text>
        <Text style={styles.policyText}>
          {DESCRIPTIONS.POLICY_B}
          <Text style={styles.underline}>{" Terms of use"}</Text>
        </Text>
      </View>
    </ScrollView>
    <Button
      onPress={_navigate}
      text="Post Offer"
      color={colors.BUTTON.BG_PRIMARY}
    />
  </View>
);

export default DeliveryOfferA;
