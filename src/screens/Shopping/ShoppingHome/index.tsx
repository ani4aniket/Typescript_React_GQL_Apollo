import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import CountriesList from "../../../components/CountriesList";
import SearchBar from "../../../components/SearchBar";
import UserLocationStrip from "../../../components/UserLocationStrip";
import ExpoIcon, { IconType } from "../../../components/Icon";
import { SCENES } from "../../../routes";
import MiniButton from "../../../components/MiniButton";
import colors from "../../../theme/colors";
import ProductsTile from "../../../components/ProductsTile";

class ShoppingHome extends React.PureComponent {
  _navigate = (scene: SCENES) => {
    Actions.push(scene);
  };

  render() {
    return (
      <View>
        <UserLocationStrip />
        <View style={styles.subContainer}>
          <View style={styles.searchView}>
            <SearchBar
              shade
              placeholder="Search for product or tap the shop icon to create one"
              style={styles.searchBar}
              inputStyle={styles.input}
              placeholderTextColor="#484848"
            />
            <TouchableOpacity
              style={styles.addProductButton}
              onPress={() => this._navigate(SCENES.CREATE_ORDER)}
            >
              <ExpoIcon
                type={IconType.MATERIAL_ICONS}
                name="add-shopping-cart"
                style={styles.addProductIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerView}>
            <Text style={styles.heading}>
              ORDER PRODUCTS FROM POPULAR COUNTRIES
            </Text>
            <MiniButton
              color="white"
              backgroundColor={colors.ORANGE}
              value="ALL COUNTRIES"
              onPress={() => this._navigate(SCENES.FAVOURITE_COUNTRY)}
              style={styles.button}
            />
          </View>
          <CountriesList />
        </View>
        <Text style={[styles.heading, styles.padding]}>
          LATEST ORDERS ON AIRBÜK
        </Text>
        <ScrollView style={styles.scroll}>
          <ProductsTile
            heading="SUM37 SECRET EYE CREAM"
            timeElasped="10 seconds ago"
            imageUri="https://res.cloudinary.com/airbuk/image/upload/country-flags/in.png"
            deliveryLocation="London, UK"
            dueDate="15 Nov 2018"
            buyingLocation="Mumbai international Airport, Swatch Showroom after security"
            price="79"
            quantity="1"
            reward="20"
            color={colors.PARROT_GREEN}
            buttonText="I want this too"
            onPress={this._pressed}
          />
        </ScrollView>
      </View>
    );
  }
}

export default ShoppingHome;
