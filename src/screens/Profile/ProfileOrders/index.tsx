import * as React from "react";
import { View, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import { HEADER } from "../../../utils/constants";
import { SCENES } from "../../../routes";

import Header from "../../../components/Headers/Header";
import ProfileTabTile from "../../../components/ProfileTabTile";
import ProfileOrderTile from "../../../components/ProfileOrderTile";
import ProfileProductInfoTile from "../../../components/ProfileProductInfoTile";
import ProfileTransitOrder from "../../../components/ProfileTransitOrder";
import ProfileDeliveredOrder from "../../../components/ProfileDeliveredOrder";

import styles from "./styles";

interface Props {}

interface InvoiceState {
  id: number;
}

class ProfileOrders extends React.PureComponent<Props, InvoiceState> {
  state = {
    id: 1
  };

  handleTabChange = (id: number) => {
    this.setState({ id });
  };

  navigateToPendingOrders = () => {
    Actions.push(SCENES.PENDING_ORDERS);
  };

  navigateToAcceptedOrders = () => {
    Actions.push(SCENES.PROFILE_ACCEPTED_ORDER);
  };

  navigateToBuyerOffers = () => {
    Actions.push(SCENES.BUYER_OFFERS);
  };

  render() {
    const { id } = this.state;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.PROFILE} />
        <View style={styles.headerView}>
          <ProfileTabTile
            id={1}
            selectedId={id}
            selectedTabColor="#f69e18"
            tabText="PENDING"
            onPress={() => this.handleTabChange(1)}
          />
          <ProfileTabTile
            id={2}
            selectedId={id}
            selectedTabColor="#67bc46"
            tabText="DEPOSIT MADE"
            onPress={() => this.handleTabChange(2)}
          />
          <ProfileTabTile
            id={3}
            selectedId={id}
            selectedTabColor="#29cefc"
            tabText="IN TRANSIT"
            onPress={() => this.handleTabChange(3)}
          />
          <ProfileTabTile
            id={4}
            selectedId={id}
            selectedTabColor="#484848"
            tabText="DELIVERED"
            onPress={() => this.handleTabChange(4)}
          />
        </View>
        {id === 1 ? (
          <View style={styles.orderListingView}>
            <ScrollView>
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#15baf8"
                productInfo="New offer received"
              />
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#9b9b9b"
                productInfo="Open for offers"
              />
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#f69e18"
                productInfo="4 offers received"
              />
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#9b9b9b"
                productInfo="Open for offers"
              />
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#9b9b9b"
                productInfo="Open for offers"
              />
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#9b9b9b"
                productInfo="Open for offers"
              />
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#9b9b9b"
                productInfo="Open for offers"
              />
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#9b9b9b"
                productInfo="Open for offers"
              />
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#9b9b9b"
                productInfo="Open for offers"
              />
              <ProfileOrderTile
                onPress={this.navigateToPendingOrders}
                heading="Product name"
                imageUri="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                color="#9b9b9b"
                productInfo="Open for offers"
              />
            </ScrollView>
          </View>
        ) : null}
        {id === 2 ? (
          <View style={styles.orderListingView}>
            <ScrollView>
              <ProfileProductInfoTile
                onPress={this.navigateToAcceptedOrders}
                heading="Product name"
                imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
                deliveryLocation="New York, USA"
                dueDate="21 Nov 2018"
                depositedAmount=" $98.75"
              />
              <ProfileProductInfoTile
                onPress={this.navigateToAcceptedOrders}
                heading="Product name"
                imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
                deliveryLocation="New York, USA"
                dueDate="21 Nov 2018"
                depositedAmount=" $98.75"
              />
              <ProfileProductInfoTile
                onPress={this.navigateToAcceptedOrders}
                heading="Product name"
                imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
                deliveryLocation="New York, USA"
                dueDate="21 Nov 2018"
                depositedAmount=" $98.75"
              />
            </ScrollView>
          </View>
        ) : null}
        {id === 3 ? (
          <View style={styles.orderListingView}>
            <ScrollView>
              <ProfileTransitOrder
                productImage="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                userImage="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
                onPress={this.navigateToBuyerOffers}
              />
            </ScrollView>
          </View>
        ) : null}
        {id === 4 ? (
          <View style={styles.orderListingView}>
            <ScrollView>
              <ProfileDeliveredOrder
                productImage="https://images-na.ssl-images-amazon.com/images/I/81b7oHjvbbL._SX569_.jpg"
                location="London, UK"
                userImage="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
                onPress={this.navigateToBuyerOffers}
                deliveredOn="25th November 2018"
              />
            </ScrollView>
          </View>
        ) : null}
      </View>
    );
  }
}

export default ProfileOrders;
