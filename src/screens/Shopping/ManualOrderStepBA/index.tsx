import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";

import { SCENES } from "../../../routes";
import { HEADER, DESCRIPTIONS } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";
import Button from "../../../components/Button";
import PageHeader from "../../../components/PageHeader";
import DeliveryRewardTile from "../../../components/DeliveryRewardTile";
import TotalTile from "../../../components/Tiles/TotalTile";

import styles from "./styles";
import { ModuleType } from "../../../utils/commonTypes";
import { COLORS } from "../../../theme";

interface State {
  price: string;
}

interface Props {
  type: ModuleType;
}

class ManualOrderStepBA extends React.PureComponent<Props, State> {
  state = {
    price: "00.00"
  };

  _navigate = () => {
    const { type } = this.props;
    Actions.push(SCENES.MANUAL_STEP_2_B, { type });
  };

  color =
    this.props.type === "travel"
      ? COLORS.BUTTON.BG_PRIMARY
      : COLORS.PARROT_GREEN;

  render() {
    const { price } = this.state;
    const { type } = this.props;
    return (
      <View style={styles.container}>
        <Header
          heading={
            type === "travel" ? HEADER.DELIVERY_OFFERS : HEADER.PRODUCT_DETAILS
          }
        />
        <PageHeader page={2} color={this.color} />
        <ScrollView>
          <Text style={styles.headingText}>DELIVERY DETAILS</Text>
          <View style={styles.currencyView}>
            <View style={styles.percentageView}>
              <View style={styles.currencyHeadingView}>
                <Text style={styles.currencyHeadingText}>Price</Text>
              </View>
              <TextInput
                placeholder="Price"
                value={`$${price.slice(1)}`}
                onChangeText={price => this.setState({ price })}
                style={styles.tile}
                onFocus={() => this.setState({ price: "" })}
              />
              <View style={styles.flex} />
            </View>
            <Text style={[styles.currencyHeadingText, styles.descriptionText]}>
              {DESCRIPTIONS.DELIVERY_DETAILS_DESCRIPTION_A}
            </Text>
          </View>
          <DeliveryRewardTile color={this.color} />
          <TotalTile />
        </ScrollView>
        <Button
          icon
          color={this.color}
          text={type === "travel" ? "Review Offer" : "Add Delivery Date"}
          onPress={this._navigate}
        />
      </View>
    );
  }
}

export default ManualOrderStepBA;
