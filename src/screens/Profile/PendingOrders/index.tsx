import * as React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import { HEADER } from "../../../utils/constants";
import { SCENES } from "../../../routes";

import ChatProductDetailTile from "../../../components/ChatProductDetailTile";
import ChatDeliveryRewardTile from "../../../components/ChatDeliveryRewardTile";
import ChatDeliveryRequestedTile from "../../../components/ChatDeliveryRequestedTile";
import Header from "../../../components/Headers/Header";

import Icon, { IconType } from "../../../components/Icon";

import styles from "./styles";

interface Props {}
interface OrderState {
  sortTile: boolean;
}

class PendingOrders extends React.PureComponent<Props, OrderState> {
  state = { sortTile: false };

  navigateToProfileEditOrder = () => {
    Actions.push(SCENES.PROFILE_EDIT_ORDER);
  };

  _toggleSortTile = () => {
    this.setState(prevState => ({ sortTile: !prevState.sortTile }));
  };

  render() {
    const { sortTile } = this.state;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.PENDING_ORDERS} />
        <ScrollView>
          <View style={styles.productDetailView}>
            <Text style={[styles.productDetailText, { marginLeft: 0 }]}>
              PRODUCT DETAILS
            </Text>
            <TouchableOpacity onPress={this.navigateToProfileEditOrder}>
              <Icon
                style={styles.threeDotIcon}
                color="#9b9b9b"
                type={IconType.ENTYPO}
                name="dots-three-horizontal"
              />
            </TouchableOpacity>
          </View>
          <ChatProductDetailTile
            price="79"
            heading="Product Name"
            imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
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
          <View style={styles.productDetailView}>
            <Text style={[styles.productDetailText, { marginLeft: 0 }]}>
              DELIVERY REWARD REQUESTED
            </Text>
            <TouchableOpacity
              onPress={this._toggleSortTile}
              style={styles.sortView}
            >
              <Text style={styles.sortText}>SORT</Text>
            </TouchableOpacity>
          </View>
          <ChatDeliveryRequestedTile
            imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
            userName="Sachin"
            location="New York,USA"
            date="21 Nov,2018"
            rewardRequested="42.5"
            total="121.5"
            others
            chat
          />
          <Text style={styles.productDetailText}>DELIVERY OFFERS</Text>
          <Text style={styles.noOfferText}>
            You will soon start receiving delivery offers by travelers coming
            your way.
          </Text>
        </ScrollView>
        {sortTile ? (
          <View style={styles.sortContainer}>
            <Text style={styles.sortHeaderText}>Sort by</Text>
            <View style={styles.separationView} />
            <View style={styles.sortRowContainer}>
              <Text style={styles.sortFooterText}>Price</Text>
              <Text style={[styles.sortFooterText, { color: "#f69e18" }]}>
                Low to High
              </Text>
            </View>
            <View style={styles.separationView} />
            <View style={styles.sortRowContainer}>
              <Text style={styles.sortFooterText}>Price</Text>
              <Text style={styles.sortFooterText}>High to Low</Text>
            </View>
            <View style={styles.separationView} />
            <View style={styles.sortRowContainer}>
              <Text style={styles.sortFooterText}>Price</Text>
              <Text style={styles.sortFooterText}>Soonest</Text>
            </View>
            <View style={styles.separationView} />
            <View style={styles.sortRowContainer}>
              <Text style={styles.sortFooterText}>Price</Text>
              <Text style={styles.sortFooterText}>Farthest</Text>
            </View>
            <View style={styles.separationView} />
            <Text style={styles.sortFooterText}>Reset</Text>
          </View>
        ) : null}
      </View>
    );
  }
}
export default PendingOrders;
