import * as React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

import { SCENES } from "../../../routes";
import { HEADER } from "../../../utils/constants";
import { imageArray } from "../../../theme/CommonStyles";

import Header from "../../../components/Headers/Header";
import PageHeader from "../../../components/PageHeader";
import OrderProfileTile from "../../../components/OrderProfileTile";
import Button from "../../../components/Button";
import DeliveryRewardTile from "../../../components/DeliveryRewardTile";
import TotalTile from "../../../components/Tiles/TotalTile";

import styles from "./styles";

interface Props {}

interface State {
  modalVisible: boolean;
}

class DeliveryReward extends React.PureComponent<Props, State> {
  navigate = () => {
    Actions.push(SCENES.DELIVERY_DATE);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header heading={HEADER.DELIVERY_REWARD} />
        <PageHeader page={2} />
        <ScrollView>
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
          onPress={this.navigate}
          text="Add Delivery Date"
          icon
          style={styles.button}
        />
      </View>
    );
  }
}

export default DeliveryReward;
