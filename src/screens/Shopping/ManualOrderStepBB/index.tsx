import React from "react";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";

import { SCENES } from "../../../routes";
import { HEADER, DESCRIPTIONS } from "../../../utils/constants";

import Header from "../../../components/Headers/Header";
import Button from "../../../components/Button";
import PageHeader from "../../../components/PageHeader";
import SearchModal from "../../../components/Modals/SearchModal";
import DeliveryDateTile from "../../../components/DeliveryDateTile";

import styles from "./styles";
import { ModuleType } from "../../../utils/commonTypes";
import { COLORS } from "../../../theme";

interface Props {
  type: ModuleType;
}

class ManualOrderStepBB extends React.PureComponent<Props> {
  navigate = () => {
    const { type } = this.props;
    Actions.push(SCENES.MANUAL_STEP_3, { type });
  };

  color =
    this.props.type === "travel"
      ? COLORS.BUTTON.BG_PRIMARY
      : COLORS.PARROT_GREEN;

  render() {
    const { type } = this.props;
    return (
      <View style={styles.container}>
        <Header
          heading={
            type === "travel" ? HEADER.DELIVERY_OFFERS : HEADER.DELIVERY_DETAILS
          }
        />
        <PageHeader page={2} color={this.color} />
        <Text style={styles.headingText}>DELIVERY DETAILS</Text>
        <View style={styles.currencyView}>
          <View style={styles.percentageView}>
            <View style={styles.currencyHeadingView}>
              <Text style={styles.currencyHeadingText}>Estimated Total</Text>
            </View>
            <View style={styles.bottomRightView}>
              <View style={styles.totalView}>
                <Text style={styles.totalText}>$98.75</Text>
              </View>
            </View>
            <View style={styles.flex} />
          </View>
          <Text style={[styles.currencyHeadingText, styles.descriptionText]}>
            {DESCRIPTIONS.DELIVERY_DETAILS_DESCRIPTION_B}
          </Text>
        </View>
        <DeliveryDateTile color={this.color} />
        <View style={styles.currencyView}>
          <View style={[styles.percentageView, styles.marginBot]}>
            <View style={styles.paddedFlex}>
              <Text style={styles.bottomHeading}>Delivery Location</Text>
              <SearchModal
                color={this.color}
                placeholder="Which city to buy this product from?"
                buttonText="Add"
              >
                <View style={styles.tile}>
                  <Text style={styles.text}>Mumbai, IN</Text>
                </View>
              </SearchModal>
            </View>
            <View style={styles.paddedFlex}>
              <Text style={styles.bottomHeading}>
                Nearest International Airport
              </Text>
              <SearchModal
                color={this.color}
                placeholder="Search for nearby international airport"
                buttonText="Detect my location"
              >
                <View style={styles.tile}>
                  <Text style={styles.text}>BOM</Text>
                </View>
              </SearchModal>
            </View>
          </View>
          <Text style={styles.bottomDescription}>
            {DESCRIPTIONS.DELIVERY_DETAILS_DESCRIPTION_C}
          </Text>
        </View>
        <Button
          icon
          color={this.color}
          text={type === "travel" ? "Notify Buyer" : "Add Delivery Location"}
          onPress={this.navigate}
        />
      </View>
    );
  }
}

export default ManualOrderStepBB;
