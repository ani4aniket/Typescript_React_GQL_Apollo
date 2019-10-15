import * as React from "react";
import { SafeAreaView, Alert } from "react-native";
import { SearchBar } from "react-native-elements";
import { Actions } from "react-native-router-flux";

import { SCENES } from "../../../routes";
import { getPlatform } from "../../../utils";

import LocationSearchResults from "../../../components/LocationSearchResults";
import DetectLocationButton from "../../../components/DetectLocationButton";

import styles from "./styles";

interface Props {}

interface State {
  searchStr: string;
}

export default class LocationSearch extends React.PureComponent<Props, State> {
  state: State = {
    searchStr: ""
  };

  inputChangeHandler = (searchStr: string) => {
    this.setState({ searchStr });
  };

  autoLocationSuccessHandler = () => {
    Actions.reset(SCENES.TABS);
  };

  autoLocationFailureHandler = (errorMessage: string) => {
    Alert.alert(
      "Could not fetch location",
      errorMessage,
      [
        {
          text: "Enter Location manually"
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          platform={getPlatform()}
          placeholder="Search for nearby international airport"
          containerStyle={styles.searchBarContainer}
          // inputContainerStyle={styles.searchBarInput}
          value={this.state.searchStr}
          onChangeText={this.inputChangeHandler}
        />
        {this.state.searchStr.length > 2 && (
          <LocationSearchResults
            searchStr={this.state.searchStr}
            onSuccess={this.autoLocationSuccessHandler}
          />
        )}
        <DetectLocationButton
          onSuccess={this.autoLocationSuccessHandler}
          onError={this.autoLocationFailureHandler}
        />
      </SafeAreaView>
    );
  }
}
