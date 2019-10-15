/* eslint-disable import/prefer-default-export */
import gql from "graphql-tag";

/**
 * Mutation for adding a trip. Takes `tripInput`. Sample input:
 * {
 *   "tripInput": {
 *     "clientMutationId": "12345", // Some arbitrary ID sent by the FE. This is then sent back.
 *     "trip": {
 *       "travellerId": "6088ac12-efbc-4fc9-abf7-5f93fb5e1e83",
 *       "statusId": 6, // ID of the enum used at the backend
 *       "departureDate": "2019-07-05", // YYYY-MM-DD
 *       "airline": "Lufthansa",
 *       "flightNumber": "LH 760",
 *       "departureAirportId": 17888,
 *       "arrivalAirportId": 51174
 *     }
 *   }
 * }
 */

export const ADD_TRIP = gql`
  mutation AddTrip($tripInput: CreateTripInput!) {
    createTrip(input: $tripInput) {
      clientMutationId
      trip {
        id
      }
    }
  }
`;

/**
 *
 *  Mutation for generating accessToken and refreshToken. Takes `id` and `password` as input. Sample input
 *  {
 *    id: "fTeq9gAMooPRDQXJK",
 *    password: "bc5f645c4c0d009ed64fa2eac13fec79"
 *  }
 *
 */

export const GET_CHAT_ACCESS = gql`
  mutation($id: ID!, $password: String!) {
    loginWithPassword(userFields: { id: $id }, password: $password) {
      sessionId
      user {
        username
      }
      tokens {
        accessToken
        refreshToken
      }
    }
  }
`;

/**
 *
 *  Mutation for sending message. Takes `id` (to whom message is being sent) and `content` as input. Sample input
 *  {
 *    id: "c7dDQ6ufjtzXox6eL",
 *    content: "Hello, world!"
 *  }
 *
 */

export const SEND_MESSAGE = gql`
  mutation($id: String!, $content: String!) {
    sendMessage(directTo: $id, content: $content) {
      id
      author {
        id
        username
        avatar
      }
      content
      channel {
        id
        name
      }
      creationTime
    }
  }
`;

/**
 *{
  "offerInput": {
    "offer": {
      "orderId": "4b9f8ee8-b782-11e9-bfe4-0242ac120002",
      "quantity": 1,
      "deliveryReward": 42.5,
      "estimatedTotal": 121.5,
      "isConfirmed": true,
      "travellerId": "35b9eb5f-4374-4835-a66f-ed3f4f346630"
    }
  }
}
 */

export const CREATE_OFFER = gql`
  mutation($offerInput: CreateOfferInput!) {
    createOffer(input: $offerInput) {
      offer {
        id
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
`;

/**
 * {
  "productInput": {
    "product": {
      "title": "iPhone X",
      "url": "https://images-na.ssl-images-amazon.com/images/I/618ZI2Xyw%2BL._SY445_.jpg",
      "available": true,
      "enabled": true,
      "salePrice": 799
    }
  }
}
 */

export const CREATE_PRODUCT = gql`
  mutation($productInput: CreateProductInput!) {
    createProduct(input: $productInput) {
      clientMutationId
      product {
        id
        title
        salePrice
        url
        available
        enabled
      }
    }
  }
`;

/**
 * {
   "orderInput": {
     "order": {
      "productId": "cbd1afe0-b761-11e9-8032-0242ac120002",
			"locationId": 75023,
      "airportId": 51174,
      "quantity": 1,
      "estimatedTotal": 121.5,
      "deliveryReward": 42,
      "deliveryDate": "2019-09-05",
    	"priceCurrencyId": 147
    }
  }
}
 */

export const CREATE_ORDER = gql`
  mutation($orderInput: CreateOrderInput!) {
    createOrder(input: $orderInput) {
      clientMutationId
      order {
        id
        productId
        unitPrice
        currencyByPriceCurrencyId {
          symbol
        }
        quantity
        estimatedTotal
        deliveryReward
        deliveryDate
        locationByLocationId {
          name
        }
        airportByAirportId {
          name
        }
      }
    }
  }
`;

export const DECLINE_OFFER = gql`
  mutation($offerInput: UpdateOfferByIdInput!) {
    updateOfferById(input: $offerInput) {
      offer {
        id
      }
    }
  }
`;
