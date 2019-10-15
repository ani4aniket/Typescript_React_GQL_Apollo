import React from "react";
import { View, Text, TextInput } from "react-native";
import Header from "../../../components/Headers/Header";
import PageHeader from "../../../components/PageHeader";

import styles from "./styles";
import Button from "../../../components/Button";
import { HEADER, DESCRIPTIONS, ORDER_COMPLETE } from "../../../utils/constants";
import AlertModal from "../../../components/Modals/AlertModal";
import { ModuleType } from "../../../utils/commonTypes";
import { COLORS } from "../../../theme";

interface State {
  modalVisible: boolean;
}

interface Props {
  type: ModuleType;
}

class ManualOrderStepC extends React.PureComponent<Props, State> {
  state = {
    modalVisible: false
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  color =
    this.props.type === "travel"
      ? COLORS.BUTTON.BG_PRIMARY
      : COLORS.PARROT_GREEN;

  render() {
    const { modalVisible } = this.state;
    const { type } = this.props;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.DELIVERY_DETAILS} />
        <PageHeader page={3} color={this.color} />
        <Text style={styles.headingText}>PREFERRED LOCATION</Text>
        <View style={styles.currencyView}>
          <View style={styles.shrinkedView}>
            <Text style={styles.currencyHeadingText}>
              Select the city where this product is located
            </Text>
            <View style={styles.tile}>
              <Text style={styles.text}>Worldwide</Text>
            </View>
          </View>
        </View>
        <View style={[styles.currencyView, { paddingVertical: 0 }]}>
          <Text style={styles.headingText}>WHERE TO BUY (OPTIONAL)</Text>
          <Text style={styles.currencyHeadingText}>
            {DESCRIPTIONS.DELIVERY_DETAILS_DESCRIPTION_D}
          </Text>
        </View>
        <View style={[styles.currencyView, { paddingVertical: 0 }]}>
          <Text style={styles.headingText}>ADD COMMENTS (OPTIONAL)</Text>
          <TextInput
            style={[styles.tile, styles.input]}
            placeholder="Enter comments..."
            multiline
          />
        </View>
        <AlertModal
          color={this.color}
          modalStatus={modalVisible}
          onPress={this.hideModal}
          buttonText={ORDER_COMPLETE.BUTTON}
          heading={ORDER_COMPLETE.HEADING}
          subHeading={ORDER_COMPLETE.SUB_HAEDING}
          description={ORDER_COMPLETE.DESCRIPTION}
        />
        <Button color={this.color} text="Post Order" onPress={this.showModal} />
      </View>
    );
  }
}

export default ManualOrderStepC;
