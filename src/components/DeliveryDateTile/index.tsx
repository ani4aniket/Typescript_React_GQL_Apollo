import React, { Fragment } from "react";
import { View, Text } from "react-native";
import Slider from "react-native-slider";
import colors from "../../theme/colors";
import DateTimeModal from "../Modals/DateTimeModal";

import styles from "./styles";
import { Color } from "csstype";

interface Props {
  color?: Color;
  hideSlider?: boolean;
}

interface State {
  date: string;
}

class DeliveryDateTile extends React.PureComponent<Props, State> {
  state = {
    date: "Whenever"
  };

  render() {
    const { date } = this.state;
    const { color, hideSlider } = this.props;
    return (
      <View style={styles.currencyView}>
        <View style={styles.rowFlex}>
          <View style={styles.currencyHeadingView}>
            <Text style={styles.currencyHeadingText}>Delivery Date</Text>
          </View>
          <DateTimeModal
            mode="date"
            date={new Date()}
            onDateChange={date => console.log(date)}
          >
            <View style={styles.tile}>
              <Text style={styles.text}>Whenever</Text>
            </View>
          </DateTimeModal>
          <View style={styles.flex} />
        </View>
        {!hideSlider && (
          <Fragment>
            <View style={styles.percentageView}>
              <Text style={styles.percentageText}>{date}</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={3}
              step={1}
              minimumTrackTintColor={color || colors.PARROT_GREEN}
              maximumTrackTintColor="#ddd"
              thumbTintColor="#ccc"
            />
          </Fragment>
        )}
      </View>
    );
  }
}

export default DeliveryDateTile;
