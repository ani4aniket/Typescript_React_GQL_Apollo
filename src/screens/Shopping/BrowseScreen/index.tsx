import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import Header from "../../../components/Headers/Header";
import { HEADER } from "../../../utils/constants";
import CountryHeader from "../../../components/CountryHeader";
import CategoryTile from "../../../components/CategoryTile";
import MiniButton from "../../../components/MiniButton";
import ProductProfileTile from "../../../components/ProductProfileTile";
import CategoryHeading from "../../../components/CategoryHeading";
import colors from "../../../theme/colors";
import { defaultProfileImage } from "../../../theme/CommonStyles";
import SearchBar from "../../../components/SearchBar";
import Popup, { Option, DetailedOption } from "../../../components/Popup";

interface State {
  searchBarStatus: boolean;
  countryHeaderStatus: boolean;
  categoryStatus: boolean;
  buttonsShow: boolean;
  categoryHeadingVisible: boolean;
  name: string;
  cityModal: boolean;
  sortModal: boolean;
}

class BrowseScreen extends React.PureComponent<{}, State> {
  state = {
    searchBarStatus: false,
    countryHeaderStatus: true,
    categoryStatus: true,
    buttonsShow: false,
    categoryHeadingVisible: false,
    name: "L1 NAME - ",
    cityModal: false,
    sortModal: false
  };

  _pressed = () => console.log("pressed");

  onButtonPress = () => {
    this.setState(prevState => ({
      name: prevState.name + "L2 NAME - ",
      buttonsShow: false
    }));
  };

  categoryPress = () =>
    this.setState({
      searchBarStatus: true,
      countryHeaderStatus: false,
      categoryStatus: false,
      categoryHeadingVisible: true,
      buttonsShow: true
    });

  onClosePress = () =>
    this.setState({
      categoryHeadingVisible: false,
      searchBarStatus: false,
      categoryStatus: true
    });

  renderSearchBar = () => {
    if (this.state.searchBarStatus)
      return (
        <View style={styles.searchBarView}>
          <SearchBar
            placeholder="Type a brand name or product name"
            style={styles.searchBar}
          />
        </View>
      );
    return null;
  };

  _showCityModal = () => this.setState({ cityModal: true });
  _hideCityModal = () => this.setState({ cityModal: false });

  _showSortModal = () => this.setState({ sortModal: true });
  _hideSortModal = () => this.setState({ sortModal: false });

  renderCategories = () => {
    const categoryData = [
      {
        value: "All",
        selected: true,
        onPress: this._pressed
      },
      {
        value: "By Users",
        selected: false,
        onPress: this.categoryPress
      },
      {
        value: "Men",
        selected: false,
        onPress: this._pressed
      },
      {
        value: "Tech",
        selected: false,
        onPress: this._pressed
      },
      {
        value: "Mobiles",
        selected: false,
        onPress: this._pressed
      },
      {
        value: "Flash",
        selected: false,
        onPress: this._pressed
      }
    ];

    if (this.state.categoryStatus)
      return (
        <View style={styles.category}>
          <Text style={styles.categoryText}>CATEGORIES</Text>
          <ScrollView horizontal style={{ flexDirection: "row" }}>
            {categoryData.map((element, index) => {
              return (
                <CategoryTile
                  key={index}
                  selected={element.selected}
                  onPress={element.onPress}
                  value={element.value}
                />
              );
            })}
          </ScrollView>
        </View>
      );
    return null;
  };

  options = () => {
    let i = 6;
    const options = ["All Cities"],
      city_one = "City One";
    while (i--) options.push(city_one);
    return options;
  };

  detailedOptions = () => {
    return [
      { key: "Price", value: "Low to High" },
      { key: "Price", value: "High to Low" },
      { key: "Date", value: "Latest" },
      { key: "Date", value: "Oldest" },
      { key: "Reset" }
    ];
  };

  renderButtons = () => {
    let i = 10;

    const buttonArray = [
      {
        value: "All",
        color: "white",
        backgroundColor: colors.ORANGE,
        onPress: this._pressed,
        style: styles.nameButton
      }
    ];

    const buttonProperty = {
      value: "L2 Item",
      color: "black",
      backgroundColor: "white",
      onPress: this.onButtonPress,
      style: styles.nameButton
    };

    while (i--) buttonArray.push(buttonProperty);

    if (this.state.buttonsShow)
      return (
        <View style={styles.buttons}>
          {buttonArray.map((element, index) => {
            return (
              <MiniButton
                key={index}
                value={element.value}
                color={element.color}
                backgroundColor={element.backgroundColor}
                onPress={element.onPress}
                style={styles.nameButton}
              />
            );
          })}
        </View>
      );
    return null;
  };

  render() {
    const { name, categoryHeadingVisible, cityModal, sortModal } = this.state;
    return (
      <View style={styles.container}>
        <Header heading={HEADER.SHOP_FEED} />
        {this.renderSearchBar()}
        <CountryHeader
          name="India"
          code="IN"
          visible={this.state.countryHeaderStatus}
        />
        {this.renderCategories()}
        <CategoryHeading
          value={name}
          onPress={this.onClosePress}
          visible={categoryHeadingVisible}
        />
        {this.renderButtons()}
        <View style={styles.bottomView}>
          <Text style={styles.text}>PRODUCTS FROM</Text>
          <Popup modalStatus={cityModal} heading="Available Cities">
            {{
              button: (
                <MiniButton
                  onPress={this._showCityModal}
                  value="ALL CITIES"
                  borderColor={colors.ORANGE}
                  color={colors.ORANGE}
                />
              ),
              options: this.options().map((element, index) => {
                return (
                  <View key={index}>
                    <Option
                      value={element}
                      selected={index == 0 ? true : false}
                      onPress={this._hideCityModal}
                    />
                  </View>
                );
              })
            }}
          </Popup>
          <View style={styles.buttonView}>
            <Popup modalStatus={sortModal} heading="Sort By">
              {{
                button: (
                  <MiniButton
                    onPress={this._showSortModal}
                    value="SORT"
                    borderColor={colors.ORANGE}
                    color={colors.ORANGE}
                    style={styles.button}
                  />
                ),
                options: this.detailedOptions().map((element, index) => {
                  return (
                    <View key={index}>
                      <DetailedOption
                        value={element.key}
                        subValue={element.value}
                        selected={index == 0 ? true : false}
                        onPress={this._hideSortModal}
                      />
                    </View>
                  );
                })
              }}
            </Popup>
          </View>
        </View>
        <ScrollView>
          <View style={styles.productTileView}>
            <ProductProfileTile
              imageUri={defaultProfileImage}
              price={99}
              country="United States"
              city="New York"
              item="Adidas 1"
              onPress={this._pressed}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default BrowseScreen;
