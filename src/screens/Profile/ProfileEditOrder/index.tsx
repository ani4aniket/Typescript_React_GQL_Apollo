import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import Slider from "react-native-slider";

import { HEADER, DESCRIPTIONS, EDIT_ORDER } from "../../../utils/constants";
import Header from "../../../components/Headers/Header";
import AlertModal from "../../../components/Modals/AlertModal";
import ChatProductDetailTile from "../../../components/ChatProductDetailTile";

import styles from "./styles";

interface Props {}

interface State {
  reward: string;
  quantity: number;
  date: string;
  percentage: string;
  modalVisible: boolean;
}
class ProfileEditOrder extends React.PureComponent<Props, State> {
  state = {
    reward: "00.00",
    percentage: "0",
    quantity: 1,
    date: "Whenever",
    modalVisible: false
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  showEditAlert = () => {
    Alert.alert(
      "Are you sure?",
      "Canceling your order will also remove any delivery offers you received.",
      [
        { text: "Edit Order", style: "destructive" },
        { text: "Cancel Order", style: "cancel" }
      ],
      { cancelable: true }
    );
  };

  modifyReward = (reward: string) => {
    this.setState({ reward });
  };

  resetReward = () => {
    this.setState({ reward: "" });
  };

  onSliderValueChange = (percentage: string) => {
    this.setState({ percentage });
  };

  onQuantityDecrease = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity - 1
    }));
  };

  onQuantityIncrease = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1
    }));
  };

  render() {
    const { reward, percentage, quantity, date, modalVisible } = this.state;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.PENDING_ORDERS} />
        <ScrollView>
          <View style={styles.productDetailView}>
            <Text style={[styles.productDetailText, { marginLeft: 0 }]}>
              PRODUCT DETAILS
            </Text>
          </View>
          <ChatProductDetailTile
            price="79"
            heading="Product Name"
            imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
          />
          <View style={styles.productDetailView}>
            <Text style={[styles.productDetailText, { marginLeft: 0 }]}>
              DELIVERY DETAILS
            </Text>
          </View>
          <View style={styles.currencyView}>
            <View style={styles.rowFlex}>
              <View style={styles.currencyHeadingView}>
                <Text style={styles.currencyHeadingText}>Delivery Reward</Text>
              </View>
              <TextInput
                placeholder="reward"
                value={`$${reward.slice(1)}`}
                onChangeText={this.modifyReward}
                style={styles.tile}
                onFocus={() => this.resetReward}
              />
              <View style={styles.flex} />
            </View>
            <View style={styles.percentageView}>
              <Text style={styles.percentageText}>{percentage}%</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={80}
              step={10}
              minimumTrackTintColor="#67bc46"
              maximumTrackTintColor="#ddd"
              thumbTintColor="#ccc"
              onValueChange={this.onSliderValueChange}
            />
          </View>
          <View style={styles.currencyView}>
            <View style={[styles.percentageView, styles.marginBot]}>
              <Text
                style={[styles.currencyHeadingText, styles.bottomRightView]}
              >
                Quantity
              </Text>
              <Text
                style={[styles.currencyHeadingText, styles.bottomRightView]}
              >
                Estimated total
              </Text>
            </View>
            <View style={styles.bottomView}>
              <View style={styles.bottomRightView}>
                <View style={styles.percentageView}>
                  <TouchableOpacity
                    style={[styles.tile, styles.button]}
                    disabled={quantity <= 1}
                    onPress={this.onQuantityDecrease}
                  >
                    <Text style={styles.buttonIcon}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{quantity}</Text>
                  <TouchableOpacity
                    style={[styles.tile, styles.button]}
                    onPress={this.onQuantityIncrease}
                  >
                    <Text style={styles.buttonIcon}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bottomRightView}>
                <View style={styles.totalView}>
                  <Text style={styles.totalText}>$98.75</Text>
                </View>
              </View>
            </View>
            <Text style={[styles.currencyHeadingText, styles.descriptionText]}>
              {DESCRIPTIONS.DELIVERY_DETAILS_DESCRIPTION_B}
            </Text>
          </View>
          <View style={styles.currencyView}>
            <View style={styles.rowFlex}>
              <View style={styles.currencyHeadingView}>
                <Text style={styles.currencyHeadingText}>Delivery Date</Text>
              </View>
              <View style={styles.tile}>
                <Text style={styles.text}>Whenever</Text>
              </View>
              <View style={styles.flex} />
            </View>
            <View style={styles.percentageView}>
              <Text style={styles.percentageText}>{date}</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={3}
              step={1}
              minimumTrackTintColor="#67bc46"
              maximumTrackTintColor="#ddd"
              thumbTintColor="#ccc"
            />
          </View>
          <AlertModal
            modalStatus={modalVisible}
            onPress={this.hideModal}
            buttonText={EDIT_ORDER.BUTTON}
            heading={EDIT_ORDER.HEADING}
            subHeading={EDIT_ORDER.SUB_HAEDING}
            description={EDIT_ORDER.DESCRIPTION}
          />
          <TouchableOpacity
            onPress={this.showModal}
            style={styles.buttonGreyBackground}
          >
            <Text style={styles.buttonText}>Edit Order</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.showModal}
            style={styles.buttonGreenBackground}
          >
            <Text style={styles.buttonText}>Edit Order</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
export default ProfileEditOrder;
