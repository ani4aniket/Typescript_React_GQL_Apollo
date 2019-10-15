import * as React from "react";
import { Query } from "react-apollo";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { fetchLocationData } from "../../reducers/locationReducer/locationActions";

import { GET_LOCATION_SEARCH_RESULTS_QUERY } from "../../apollo/queries";

import LocationItem, { LocationDetail } from "./LocationItem";

interface LocationsList {
  locations: LocationDetail[];
}

interface QueryResult {
  matchesByName: LocationsList;
  matchesByRegion: LocationsList;
  matchesBySubRegion: LocationsList;
}

interface QueryVariables {
  keyword: string;
}

interface DispatchToProps {
  fetchLocationData: typeof fetchLocationData;
}

interface OwnProps {
  searchStr: string;
  onSuccess: () => void;
}

type Props = DispatchToProps & OwnProps;

const LocationSearchResults: React.FunctionComponent<Props> = props => {
  const variables: QueryVariables = {
    keyword: props.searchStr
  };
  const onLocationSelect = (selectedLocation: LocationDetail) => {
    props.fetchLocationData(
      Number(selectedLocation.latitude),
      Number(selectedLocation.longitude)
    );
    props.onSuccess();
  };
  return (
    <Query<QueryResult, QueryVariables>
      query={GET_LOCATION_SEARCH_RESULTS_QUERY}
      variables={variables}>
      {({ loading, data, error }) => {
        if (loading) {
          return <Text>Loading...</Text>;
        }
        if (error) {
          return <Text>Something bad happened</Text>;
        }
        if (data) {
          return (
            <View>
              <View>
                {data.matchesByName.locations.map(location => (
                  <LocationItem
                    key={location.id}
                    location={location}
                    onLocationSelect={onLocationSelect}
                  />
                ))}
              </View>
              <View>
                {data.matchesByRegion.locations.map(location => (
                  <LocationItem
                    key={location.id}
                    location={location}
                    onLocationSelect={onLocationSelect}
                  />
                ))}
              </View>
              <View>
                {data.matchesBySubRegion.locations.map(location => (
                  <LocationItem
                    key={location.id}
                    location={location}
                    onLocationSelect={onLocationSelect}
                  />
                ))}
              </View>
            </View>
          );
        }
        return <Text>Type something...</Text>;
      }}
    </Query>
  );
};

const dispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators({ fetchLocationData }, dispatch);

export default connect(
  null,
  dispatchToProps
)(React.memo(LocationSearchResults));
