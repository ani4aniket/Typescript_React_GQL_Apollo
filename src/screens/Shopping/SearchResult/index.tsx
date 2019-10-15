import * as React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import Header from "../../../components/Headers/Header";
import { HEADER, DESCRIPTIONS } from "../../../utils/constants";
import { imageArray } from "../../../theme/CommonStyles";
import OrderProfileTile from "../../../components/OrderProfileTile";

export default class SearchResult extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Header heading={HEADER.SEARCH_RESULTS} />
        <OrderProfileTile
          border
          brandName="Brand Name"
          productName="Product Name"
          price="79"
          images={imageArray}
          currency="$"
        />
        <View style={styles.specifications}>
          <Text style={styles.text}>Specifications</Text>
          <Text style={styles.description}>{DESCRIPTIONS.SEARCH_RESULT_A}</Text>
        </View>
      </View>
    );
  }
}
