import * as React from "react";

import { Query, QueryResult } from "react-apollo";
import { FlatList, Text, ListRenderItemInfo } from "react-native";

import { COUNTRIES_BY_PRODUCT_COUNT_QUERY } from "../../apollo/queries";

import CountryCard, { Country } from "./CountryCard";

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

export default class CountriesList extends React.PureComponent<Props, State> {
  countriesListKeyExtractor = (country: Country) => country.code;

  renderCountryCard = ({ item }: ListRenderItemInfo<Country>) => (
    <CountryCard {...item} />
  );

  renderContent = (result: QueryResult<QueryData>) => {
    if (result.loading) {
      return <Text>Loading...</Text>;
    }
    if (result.error) {
      return <Text>Error: {result.error.message}</Text>;
    }
    if (!result.data) {
      return <Text>Could not fetch any data!</Text>;
    }
    return (
      <FlatList
        horizontal
        data={result.data.countriesDetails.countries}
        keyExtractor={this.countriesListKeyExtractor}
        renderItem={this.renderCountryCard}
        style={styles.flatList}
      />
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
