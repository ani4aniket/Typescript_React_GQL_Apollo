import * as React from "react";
import { Query } from "react-apollo";
import { Text, View } from "react-native";

import LatestTripTile from "../LatestTripTile";

import { TRAVELLER_TRIPS_QUERY } from "../../apollo/queries";

interface AirportDetails {
  iataCode: string | null;
  name: string | null;
}

interface OffersDetails {
  totalCount: number;
}

export interface TripDetail {
  id: string | null;
  departureDate: string | null;
  flightNumber: string | null;
  airline: string | null;
  departureAirportDetails: AirportDetails;
  arrivalAirportDetails: AirportDetails;
  offersDetails: OffersDetails;
  onPressMore: () => void;
}

interface TripsList {
  trips: TripDetail[];
}

interface QueryVariables {
  travellerId: string;
  currentDate: string;
}

interface QueryResult {
  tripsDetails: TripsList;
}

interface OwnProps {
  travellerId: string;
  onPressMore: () => void;
}

type Props = OwnProps;

const PendingTripResults: React.FunctionComponent<Props> = props => {
  const variables: QueryVariables = {
    travellerId: props.travellerId,
    currentDate: new Date().toDateString()
  };
  return (
    <Query<QueryResult, QueryVariables>
      query={TRAVELLER_TRIPS_QUERY}
      variables={variables}
    >
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
              {data.tripsDetails.trips.map((trip, index) => (
                <LatestTripTile
                  key={index}
                  {...trip}
                  onPressMore={props.onPressMore}
                />
              ))}
            </View>
          );
        }
        return <Text>Type something...</Text>;
      }}
    </Query>
  );
};

export default React.memo(PendingTripResults);
