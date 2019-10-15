import * as React from "react";
import { View, Text } from "react-native";
import Header from "../../../components/Headers/Header";
import styles from "./styles";
import { HEADER, DESCRIPTIONS } from "../../../utils/constants";
import MiniButton from "../../../components/MiniButton";
import colors from "../../../theme/colors";
import CountryIconList from "../../../components/CountryIconList";
import CountryList from "../../../components/CountryList";

interface State {
  disabled: boolean;
}

class FavouriteCountry extends React.PureComponent<{}, State> {
  pressed = () => {
    console.log("pressed");
  };

  state: State = { disabled: false };

  render() {
    const { disabled } = this.state;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.SHOP_FEED} />
        <Text style={styles.heading}>
          {DESCRIPTIONS.FAVOURITE_COUNTRY_DESCRIPTION_A}
        </Text>
        <View style={styles.headingView}>
          <Text style={styles.text}>Fvourite Countries</Text>
          <MiniButton
            color={colors.ORANGE}
            borderColor={colors.ORANGE}
            value="EDIT"
            onPress={this.pressed}
          />
        </View>
        <CountryIconList />
        <Text style={styles.listHeading}>All Countries</Text>
        <CountryList disabled={disabled} />
      </View>
    );
  }
}

export default FavouriteCountry;
