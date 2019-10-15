import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import Header from "../../../components/Headers/Header";
import { HEADER } from "../../../utils/constants";

import styles from "./styles";
import ExpoIcon, { IconType } from "../../../components/Icon";
import { SCENES } from "../../../routes";

class CreateOrder extends React.PureComponent {
  _navigate = () => {
    Actions.push(SCENES.MANUAL_STEP_1);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header heading={HEADER.SHOP_FEED} />
        <View style={styles.noteTile}>
          <Text style={styles.noteTileHeading}>Create Order</Text>
          <View style={styles.noteLine} />
          <Text style={styles.noteTileDescription}>
            Can't find your product on Airbük? No problem you can manually
            create an order
          </Text>
        </View>
        <View style={styles.tile}>
          <Text style={styles.tileHeading}>Enter details manually</Text>
          <View style={styles.line} />
          <TouchableOpacity style={styles.tileButton} onPress={this._navigate}>
            <Text style={styles.tileDescription}>
              Make sure all details are correct for your order to receive the
              exact item
            </Text>
            <ExpoIcon
              type={IconType.ANT_DESIGN}
              name="right"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CreateOrder;
