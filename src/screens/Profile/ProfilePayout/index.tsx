import * as React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";

import { Actions } from "react-native-router-flux";
import { HEADER } from "../../../utils/constants";
import { SCENES } from "../../../routes";

import Header from "../../../components/Headers/Header";
import Icon, { IconType } from "../../../components/Icon";

import styles from "./styles";

interface Props {}

interface InvoiceState {
  payoutMethod: boolean;
}

class ProfilePayout extends React.PureComponent<Props, InvoiceState> {
  state = { payoutMethod: false };

  addPayoutMethod = () => {
    this.setState({ payoutMethod: true });
  };

  navigateToPayoutForm = () => {
    Actions.push(SCENES.PAYOUT_FORM);
  };

  render() {
    const { payoutMethod } = this.state;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.PROFILE} />
        <ScrollView>
          <Text style={styles.payoutText}>PAYOUT OPTIONS</Text>
          <Text style={styles.payoutInfoText}>
            As a traveler, money will be transferred to you via your selected
            payout method within 7 - 10 business working days after the buyers
            confirms the delivery.
          </Text>
          <View style={styles.separationView} />
          {!payoutMethod ? (
            <Text style={styles.noPayoutText}>No payout method found. </Text>
          ) : (
            <View>
              <View style={[styles.rowView, { marginTop: 5 }]}>
                <View />
                <TouchableOpacity>
                  <Icon
                    style={styles.threeDotIcon}
                    color="#9b9b9b"
                    type={IconType.ENTYPO}
                    name="dots-three-horizontal"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.inputText}>Payout Method Name</Text>
              <View style={styles.rowView}>
                <View style={styles.paymentView}>
                  <Text style={styles.paymentStatusText}>Payment Status</Text>
                  <Text style={styles.incomingPaymentText}>
                    Incoming payment
                  </Text>
                </View>
                <Text style={styles.amountText}>$98.75</Text>
              </View>
              <Text style={styles.editText}>
                Cannot edit or delete Payout method before incoming payment.
              </Text>
            </View>
          )}
          <View style={styles.separationView} />
          <TouchableOpacity
            onPress={this.navigateToPayoutForm}
            style={styles.addPayoutButton}
          >
            {payoutMethod ? (
              <Text style={styles.addPayoutText}>Edit Payout Method</Text>
            ) : (
              <Text style={styles.addPayoutText}>Add Payout Method</Text>
            )}
          </TouchableOpacity>
          {payoutMethod ? (
            <View>
              <Text style={styles.helpText}>
                If you are having any trouble regarding receiving your payment
                or selecting a payout method.
              </Text>
              <View style={styles.supportView}>
                <Text style={[styles.supportText, { color: "#707070" }]}>
                  Please reach out to us on
                </Text>
                <Text style={[styles.supportText, { color: "#15baf8" }]}>
                  payments@airbuk.com
                </Text>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

export default ProfilePayout;
