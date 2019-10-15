import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DESCRIPTIONS } from "../../../utils/constants";

import styles from "./styles";

interface Props {
  hideQuantity?: boolean;
}

interface State {
  quantity: number;
}

class TotalTile extends React.PureComponent<Props, State> {
  state = {
    quantity: 1
  };

  increment = () =>
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));

  decrement = () =>
    this.setState(prevState => ({ quantity: prevState.quantity - 1 }));

  render() {
    const { quantity } = this.state;
    const { hideQuantity } = this.props;
    return (
      <View style={styles.currencyView}>
        <View style={[styles.percentageView, styles.marginBot]}>
          {!hideQuantity && (
            <Text style={[styles.currencyHeadingText, styles.bottomRightView]}>
              Quantity
            </Text>
          )}
          <Text style={[styles.currencyHeadingText, styles.bottomRightView]}>
            Estimated total
          </Text>
        </View>
        <View
          style={[styles.bottomView, hideQuantity ? styles.hideQuantity : null]}
        >
          {!hideQuantity && (
            <View style={styles.bottomRightView}>
              <View style={styles.percentageView}>
                <TouchableOpacity
                  style={[styles.tile, styles.button]}
                  disabled={quantity <= 1}
                  onPress={this.decrement}
                >
                  <Text style={styles.buttonIcon}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity
                  style={[styles.tile, styles.button]}
                  onPress={this.increment}
                >
                  <Text style={styles.buttonIcon}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
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
    );
  }
}

export default TotalTile;
