import * as React from "react";

import { Query, QueryResult } from "react-apollo";
import { View, Text } from "react-native";

import { COUNTRIES_BY_PRODUCT_COUNT_QUERY } from "../../apollo/queries";

import CountryCard, { Country } from "./CountryIcon";

import styles from "./styles";

interface QueryData {
  countriesDetails: {
    totalCount: number;
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
    };
    countries: Country[];
  };
}

interface QueryVariables {
  countriesOffset: number;
  numCountries: number;
}

interface Props {}

interface State {}

export default class CountryIconList extends React.PureComponent<Props, State> {
  renderContent = (result: QueryResult<QueryData>) => {
    if (result.loading) {
      return <Text>Loading...</Text>;
    }
    if (result.error) {
      console.log(result.error.message);
      return <Text>Error: Something went wrong</Text>;
    }
    if (!result.data) {
      return <Text>Could not fetch any data!</Text>;
    }
    return (
      <View style={styles.countryList}>
        {result.data.countriesDetails.countries.map(element => {
          return (
            <CountryCard
              key={element.code}
              name={element.name}
              code={element.code}
            />
          );
        })}
      </View>
    );
  };

  render() {
    const variables: QueryVariables = {
      countriesOffset: 0,
      numCountries: 10
    };
    return (
      <Query query={COUNTRIES_BY_PRODUCT_COUNT_QUERY} variables={variables}>
        {this.renderContent}
      </Query>
    );
  }
}
