import * as React from "react";
import { View, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import { HEADER } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";
import { SCENES } from "../../../routes";
import Button from "../../../components/Button";
import colors from "../../../theme/colors";
import PageHeader from "../../../components/PageHeader";
import { COLORS } from "../../../theme";
import TotalTile from "../../../components/Tiles/TotalTile";
import DeliveryDateTile from "../../../components/DeliveryDateTile";

interface Props {}

const _navigate = () =>
  Actions.push(SCENES.MANUAL_STEP_2_A, { type: "travel" });

const DeliveryOffer: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.REQUEST_FEED} />
    <PageHeader color={COLORS.BUTTON.BG_PRIMARY} page={2} />
    <ScrollView style={styles.scroll}>
      <TotalTile hideQuantity />
      <DeliveryDateTile hideSlider />
    </ScrollView>
    <Button
      onPress={_navigate}
      text="Notify Buyer"
      icon
      color={colors.BUTTON.BG_PRIMARY}
    />
  </View>
);

export default DeliveryOffer;
