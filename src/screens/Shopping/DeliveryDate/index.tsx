import * as React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../../../components/Headers/Header";
import styles from "./styles";
import { HEADER, COMMENTS, ORDER_COMPLETE } from "../../../utils/constants";
import PageHeader from "../../../components/PageHeader";
import OrderProfileTile from "../../../components/OrderProfileTile";
import { imageArray } from "../../../theme/CommonStyles";
import Button from "../../../components/Button";
import DeliveryDateTile from "../../../components/DeliveryDateTile";
import AlertModal from "../../../components/Modals/AlertModal";

interface State {
  modalVisible: boolean;
}

class DeliveryDate extends React.PureComponent<{}, State> {
  state = {
    modalVisible: false
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.DELIVERY_DATE} />
        <PageHeader page={3} />
        <ScrollView>
          <OrderProfileTile
            brandName="Brand Name"
            productName="Product Name"
            price="79"
            images={imageArray}
            currency="$"
          />
          <View style={styles.tile}>
            <Text style={styles.commentHeading}>Comments</Text>
            <Text style={styles.comment}>
              {COMMENTS.DELIVERY_DETAILS_COMMENT}
            </Text>
          </View>
          <DeliveryDateTile />
        </ScrollView>
        <AlertModal
          modalStatus={modalVisible}
          onPress={this.hideModal}
          buttonText={ORDER_COMPLETE.BUTTON}
          heading={ORDER_COMPLETE.HEADING}
          subHeading={ORDER_COMPLETE.SUB_HAEDING}
          description={ORDER_COMPLETE.DESCRIPTION}
        />
        <Button
          text="Post Order"
          onPress={this.showModal}
          style={styles.button}
        />
      </View>
    );
  }
}

export default DeliveryDate;
