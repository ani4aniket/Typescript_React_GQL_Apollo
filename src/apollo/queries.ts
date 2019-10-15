/* eslint-disable import/prefer-default-export */
import gql from "graphql-tag";

/**
 * Query for fetching countries by product count.
 * Paginated against `numCountries` and `countriesOffset`.
 *
 * Sample input:
 * {
 *   "numCountries": 10
 *   "countriesOffset": 0
 * }
 */
export const COUNTRIES_BY_PRODUCT_COUNT_QUERY = gql`
  query Countries($numCountries: Int, $countriesOffset: Int) {
    countriesDetails: allCountryProductCounts(
      first: $numCountries
      offset: $countriesOffset
      orderBy: PRODUCT_COUNT_DESC
    ) {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
      countries: nodes {
        name
        code
      }
    }
  }
`;

/**
 * Query to search for location using `keyword`.
 * Does a case insensitive substring search against
 * the name, region and sub_region of all the available
 * locations in the DB.
 *
 * Sample input:
 * {
 *   "keyword": "bangalo"
 * }
 */
export const GET_LOCATION_SEARCH_RESULTS_QUERY = gql`
  fragment SearchResults on LocationsConnection {
    locations: nodes {
      id
      name
      region
      subRegion
      latitude
      longitude
    }
  }

  query SearchLocation($keyword: String!) {
    matchesByName: allLocations(
      first: 5
      filter: { name: { includesInsensitive: $keyword } }
    ) {
      ...SearchResults
    }
    matchesByRegion: allLocations(
      first: 5
      filter: { region: { includesInsensitive: $keyword } }
    ) {
      ...SearchResults
    }
    matchesBySubRegion: allLocations(
      first: 5
      filter: { subRegion: { includesInsensitive: $keyword } }
    ) {
      ...SearchResults
    }
  }
`;

/**
 * Query to search for an airport using `keyword`.
 * Does a case insensitive substring search against
 * the name and iata_code of all the available
 * airports in the DB.
 *
 * Sample input:
 * {
 *   "keyword": "del"
 * }
 */
export const SEARCH_AIRPORTS_QUERY = gql`
  fragment SearchResults on AirportsConnection {
    airports: nodes {
      id
      name
      iataCode
      type
    }
  }

  query SearchAirport($keyword: String!) {
    matchesByIataCode: allAirports(
      first: 5
      filter: { iataCode: { includesInsensitive: $keyword } }
    ) {
      ...SearchResults
    }
    matchesByName: allAirports(
      first: 5
      filter: {
        name: { includesInsensitive: $keyword }
        type: { in: ["large_airport", "medium_airport", "small_airport"] }
        iataCode: { isNull: false }
      }
    ) {
      ...SearchResults
    }
  }
`;

/**
 * Query to fetch the number of trips pending for a user.
 * Takes `travellerId` which is the UUID of the logged-in user.
 *
 * Sample input:
 * {
 *   "travellerId": "6088ac12-efbc-4fc9-abf7-5f93fb5e1e83",
 *   "currentDate": new Date().toDateString()
 * }
 */
export const TRAVELLER_TRIPS_QUERY = gql`
  fragment AirportDetails on Airport {
    iataCode
    name
  }

  query UserTrips($travellerId: String!, $currentDate: Date!) {
    tripsDetails: allTrips(
      condition: { travellerId: $travellerId }
      filter: { departureDate: { greaterThanOrEqualTo: $currentDate } }
    ) {
      trips: nodes {
        id
        departureDate
        flightNumber
        airline
        departureAirportDetails: airportByDepartureAirportId {
          ...AirportDetails
        }
        arrivalAirportDetails: airportByArrivalAirportId {
          ...AirportDetails
        }
        offersDetails: offersByTripId {
          totalCount
        }
      }
    }
  }
`;

/**
 * Query to fetch the sensitive information of the user.
 * Takes `username` which is the UUID of the logged-in user.
 *
 * Sample input:
 * {
 *   "username": "pranjalnadhani",
 * }
 */

export const GET_USER_CREDENTIALS = gql`
  query($username: String!) {
    allChatUserMappings(filter: { chatUsername: { includes: $username } }) {
      nodes {
        userId
        active
        chatUuid
        chatUsername
        chatPassword
      }
    }
  }
`;

/**
 * Query to fetch all the channels associated to the user.
 * Takes `id` which is the chat UUID of the logged-in user.
 *
 * Sample input:
 * {
 *   "id": "fTeq9gAMooPRDQXJK",
 * }
 */

export const GET_CHAT_CHANNELS = gql`
  query($id: String!) {
    channelsByUser(userId: $id) {
      id
      name
      members {
        id
        username
        status
        avatar
        name
      }
    }
  }
`;

/**
 * Query to fetch all the messages of a particular channel.
 * Takes `id` which is the channel id of one of the channel associated to the user.
 *
 * Sample input:
 * {
 *   "id": "c7dDQ6ufjtzXox6eLfTeq9gAMooPRDQXJK",
 * }
 */

export const GET_MESSAGES = gql`
  query($id: String!) {
    messages(channelId: $id) {
      messagesArray {
        id
        author {
          id
          avatar
          username
        }
        content
        creationTime
      }
    }
  }
`;

export const GET_ALL_PRODUCTS = gql`
  {
    allProducts {
      nodes {
        id
        title
        url
        available
        enabled
        salePrice
      }
    }
  }
`;

/**
 *  {
 *   "id": "a965660a-b936-11e9-a994-0242ac120002"
 *  }
 */

// export const GET_PRODUCT_BY_ID = gql`
//   query($id: UUID!) {
//     productById(id: $id) {
//       id
//       createdAt
//       title
//       url
//       available
//       enabled
//       salePrice
//       ordersByProductId {
//         totalCount
//         nodes {
//           id
//           createdAt
//         }
//       }
//     }
//   }
// `;

export const GET_PRODUCT_INFO_BY_ID = gql`
  query($id: UUID!) {
    orderById(id: $id) {
      airportByAirportId {
        iataCode
      }
      locationByLocationId {
        name
        countryByCountryCode {
          name
          code
        }
      }
      estimatedTotal
      deliveryDate
      id
      quantity
      productByProductId {
        id
        title
        url
        available
        enabled
        salePrice
      }
    }
  }
`;

/**
 * {
 *  "nodeId": "WyJvcmRlcnMiLCI0YjlmOGVlOC1iNzgyLTExZTktYmZlNC0wMjQyYWMxMjAwMDIiXQ=="
 * }
 */

export const GET_OFFERS_BY_ORDER_ID = gql`
  query($nodeId: ID!) {
    order(nodeId: $nodeId) {
      offersByOrderId(orderBy: DELIVERY_REWARD_DESC) {
        nodes {
          id
          tripId
          orderId
          quantity
          deliveryReward
          estimatedTotal
          isConfirmed
          travellerId
          createdAt
          updatedAt
          travellerId
        }
      }
    }
  }
`;

export const GET_ALL_OFFERS = gql`
  {
    allOffers {
      nodes {
        id
        tripId
        orderId
        nodeId
        quantity
        deliveryReward
        estimatedTotal
        isConfirmed
        userEntityByTravellerId {
          firstName
          lastName
          email
          username
        }
        createdAt
        updatedAt
        travellerId
      }
    }
  }
`;
