import * as React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

import { Actions } from "react-native-router-flux";
import { HEADER } from "../../../utils/constants";
import { SCENES } from "../../../routes";

import Header from "../../../components/Headers/Header";

import styles from "./styles";
import ProfilePaymentTile from "../../../components/ProfliePaymentTile";

interface Props {}

interface InvoiceState {
  payoutMethod: boolean;
}

const usertList = [
  {
    cardNo: "XXXX XXXX XXXX 1243",
    imageUrl: "https://i.ibb.co/tpTTcCh/Visa.jpg",
    expiry: "02/24"
  },
  {
    cardNo: "XXXX XXXX XXXX 1243",
    imageUrl: "https://i.ibb.co/tpTTcCh/Visa.jpg",
    expiry: "02/24"
  },
  {
    cardNo: "XXXX XXXX XXXX 1243",
    imageUrl: "https://i.ibb.co/tpTTcCh/Visa.jpg",
    expiry: "02/24"
  },
  {
    cardNo: "XXXX XXXX XXXX 1243",
    imageUrl: "https://i.ibb.co/tpTTcCh/Visa.jpg",
    expiry: "02/24"
  }
];

class ProfilePaymentMethod extends React.PureComponent<Props, InvoiceState> {
  state = { payoutMethod: false };

  addPayoutMethod = () => {
    this.setState({ payoutMethod: true });
  };

  navigateToAddCard = () => {
    Actions.push(SCENES.ADD_CARD);
  };

  render() {
    const { payoutMethod } = this.state;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.PROFILE} />
        <ScrollView>
          <Text style={styles.payoutText}>PAYMENT METHOD</Text>
          {!payoutMethod ? (
            <View>
              <Text style={styles.payoutInfoText}>
                Add a payment method here to make the payment process faster.
              </Text>
              <View style={styles.separationView} />
              <Text style={styles.noPayoutText}>No payout method found. </Text>
              <View style={styles.separationView} />
            </View>
          ) : (
            usertList.map(cardData => {
              return (
                <ProfilePaymentTile
                  cardNo={cardData.cardNo}
                  imageUri={cardData.imageUrl}
                  expiry={cardData.expiry}
                />
              );
            })
          )}
          <TouchableOpacity
            onPress={this.navigateToAddCard}
            style={styles.addPayoutButton}
          >
            {!payoutMethod ? (
              <Text style={styles.addPayoutText}>Add Payment Method</Text>
            ) : (
              <Text style={styles.addPayoutText}>Add New</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default ProfilePaymentMethod;
