import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Slider from "react-native-slider";

import styles from "./styles";
import colors from "../../theme/colors";

interface State {
  reward: string;
  percentage: string;
}
interface Props {
  color?: string;
}

class DeliveryRewardTile extends React.PureComponent<Props, State> {
  state = {
    reward: "00.00",
    percentage: "0"
  };

  _onSlide = (percentage: string) => this.setState({ percentage });

  _onFocus = () => this.setState({ reward: "" });

  _onChangeText = (reward: string) => this.setState({ reward });

  render() {
    const { reward, percentage } = this.state;
    const { color } = this.props;
    return (
      <View style={styles.currencyView}>
        <View style={styles.rowFlex}>
          <View style={styles.currencyHeadingView}>
            <Text style={styles.currencyHeadingText}>Delivery Reward</Text>
          </View>
          <TextInput
            placeholder="reward"
            value={`$${reward.slice(1)}`}
            onChangeText={this._onChangeText}
            style={styles.tile}
            onFocus={this._onFocus}
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
          minimumTrackTintColor={color || colors.PARROT_GREEN}
          maximumTrackTintColor="#ddd"
          thumbTintColor="#ccc"
          onValueChange={this._onSlide}
        />
      </View>
    );
  }
}

export default DeliveryRewardTile;
