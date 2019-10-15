import * as React from "react";
import { Text, View, ScrollView, Switch, TouchableOpacity } from "react-native";

import { HEADER, DEPOSIT_MADE } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";
import PaymentOptionTile from "../../../components/PaymentOptionTile";
import CardDetailTile from "../../../components/CardDetailTile";
import AlertModal from "../../../components/Modals/AlertModal";

import styles from "./styles";

interface Props {}

interface State {
  toggleValue: boolean;
  modalVisible: boolean;
}

class Invoice extends React.PureComponent<Props, State> {
  state: State = {
    toggleValue: true,
    modalVisible: false
  };

  handleToggleChange = () => {
    this.setState(prevState => ({ toggleValue: !prevState.toggleValue }));
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { toggleValue, modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.INVOICE} />
        <ScrollView>
          <Text style={styles.paymentText}>PAYMENT OPTION</Text>
          <PaymentOptionTile country="India" total="121.5" />
          <View style={styles.cardInfoView}>
            <Text style={styles.paymentText}>CARD DETAILS</Text>
            <View style={styles.cardToggleView}>
              <Text style={styles.futureText}>Save card for future</Text>
              <Switch
                onValueChange={this.handleToggleChange}
                value={toggleValue}
              />
            </View>
          </View>
          <CardDetailTile cardView={toggleValue} />
          <AlertModal
            modalStatus={modalVisible}
            onPress={this.hideModal}
            buttonText={DEPOSIT_MADE.BUTTON}
            heading={DEPOSIT_MADE.HEADING}
            subHeading={DEPOSIT_MADE.SUB_HAEDING}
            description={DEPOSIT_MADE.DESCRIPTION}
          />
          <TouchableOpacity
            onPress={this.showModal}
            style={styles.buttonGreyBackground}
          >
            <Text style={styles.buttonText}>Make Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.showModal}
            style={styles.buttonGreenBackground}
          >
            <Text style={styles.buttonText}>Make Deposit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Invoice;
