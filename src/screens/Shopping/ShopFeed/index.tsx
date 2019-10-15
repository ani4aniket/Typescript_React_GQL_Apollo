import * as React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

import { HEADER } from "../../../utils/constants";
import { SCENES } from "../../../routes";
import Header from "../../../components/Headers/Header";
import PageHeader from "../../../components/PageHeader";
import OrderProfileTile from "../../../components/OrderProfileTile";
import { imageArray } from "../../../theme/CommonStyles";
import Button from "../../../components/Button";

import styles from "./styles";
import { COLORS } from "../../../theme";
import ProductDescription from "../../../components/ProductDescription";
import { ModuleType } from "../../../utils/commonTypes";

interface Props {
  type: ModuleType;
}

interface State {
  searchTerm: string;
  products: string[];
}

class ShopFeed extends React.PureComponent<Props, State> {
  navigate = () => Actions[SCENES.SHOP_FEED]({ type: "travel" });
  color =
    this.props.type === "travel"
      ? COLORS.BUTTON.BG_PRIMARY
      : COLORS.PARROT_GREEN;

  render() {
    const { type } = this.props;
    return (
      <View style={styles.container}>
        <Header
          heading={type === "travel" ? HEADER.REQUEST_FEED : HEADER.SHOP_FEED}
        />
        <PageHeader color={this.color} page={type === "travel" ? 1 : 2} />
        <ScrollView>
          <OrderProfileTile
            border
            brandName="Brand Name"
            productName="Product Name"
            price="79"
            images={imageArray}
            currency="$"
          />
          <ProductDescription />
        </ScrollView>
        <Button
          color={this.color}
          onPress={this.navigate}
          text="Add Delivery Reward"
          icon
          style={styles.button}
        />
      </View>
    );
  }
}

export default ShopFeed;
