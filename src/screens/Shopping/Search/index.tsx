import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withApollo, WithApolloClient } from "react-apollo";
import { SearchBar } from "react-native-elements";
import { debounce } from "lodash";

import { getPlatform } from "../../../utils";
import { COLORS } from "../../../theme";

interface Props {}

interface State {
  searchTerm: string;
  products: string[];
}

class ProductSearch extends React.PureComponent<
  WithApolloClient<Props>,
  State
> {
  state: State = {
    searchTerm: "",
    products: []
  };

  executeSearch = async (searchTerm: string) => {
    return searchTerm;
  };

  executeSearchDebounced = debounce(this.executeSearch, 500);

  onChangeText = (searchTerm: string) => {
    if (searchTerm.length > 3) {
      this.executeSearchDebounced(searchTerm);
    }
    this.setState({ searchTerm });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          platform={getPlatform()}
          placeholder="Search for nearby international airport"
          containerStyle={styles.searchBarContainer}
          value={this.state.searchTerm}
          onChangeText={this.onChangeText}
        />
        <View>
          {this.state.products.map(product => (
            <Text key={product}>{product}</Text>
          ))}
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: COLORS.WHITE,
    borderTopWidth: 0,
    borderBottomWidth: 0
  }
});

export default withApollo<Props>(ProductSearch);
