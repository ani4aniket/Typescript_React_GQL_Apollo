import * as React from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { Actions } from "react-native-router-flux";

import { HEADER, OFFER_DECLINE } from "../../../utils/constants";
import { SCENES } from "../../../routes";
import { GET_PRODUCT_INFO_BY_ID } from "../../../apollo/queries";
import { DECLINE_OFFER } from "../../../apollo/mutations";
import { Query, Mutation, withApollo } from "react-apollo";
import moment from "moment";
import Header from "../../../components/Headers/Header";
import ChatProductDetailTile from "../../../components/ChatProductDetailTile";
import ChatDeliveryRewardTile from "../../../components/ChatDeliveryRewardTile";
import ChatDeliveryRequestedTile from "../../../components/ChatDeliveryRequestedTile";
import AlertModal from "../../../components/Modals/AlertModal";
import TileLoader from "../../../components/ChatProductDetailTile/TileLoader";

import styles from "./styles";
import RewardTileLoader from "../../../components/ChatDeliveryRewardTile/RewardTileLoader";

interface Props {}

interface States {
  modalVisible: boolean;
}
interface QueryResult {
  title: string;
  url: string;
}

interface QueryVariables {
  id: string;
}

class BuyerOffers extends React.PureComponent<Props, States> {
  state = {
    modalVisible: false
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  navigateToOfferDetails = () => {
    Actions.push(SCENES.OFFER_DETAILS);
  };

  declineConfirm = () => {
    this.props.client.mutate({
      mutation: DECLINE_OFFER,
      variables: {
        offerInput: {
          id: "966ac92a-d01d-11e9-bf97-0242ac120002",
          offerPatch: {
            statusId: 10
          }
        }
      }
    });
    alert("Offer from Traveller was declined");
  };

  showDeclineAlert = () => {
    Alert.alert(
      "",
      "Let the traveler know what change you want in the delivery offer.",
      [
        {
          text: "Decline Offer",
          style: "destructive",
          onPress: this.declineConfirm
        },
        { text: "Cancel", style: "cancel" }
      ],
      { cancelable: false }
    );
  };

  render() {
    const { modalVisible } = this.state;
    const variables: QueryVariables = {
      id: "4b9f8ee8-b782-11e9-bfe4-0242ac120002"
    };
    return (
      <View style={styles.container}>
        <Header heading={HEADER.CHAT} />
        <ScrollView>
          <Text style={styles.productDetailText}>PRODUCT DETAILS</Text>
          <Query<QueryResult, QueryVariables>
            query={GET_PRODUCT_INFO_BY_ID}
            variables={variables}
          >
            {({ loading, data, error }) => {
              if (loading) {
                return <TileLoader loading={loading} />;
                return null;
              }
              if (error) {
                return <Text>Something bad happened</Text>;
              }
              if (data) {
                const res = data.orderById;

                return (
                  <ChatProductDetailTile
                    price={res.productByProductId.salePrice}
                    heading={res.productByProductId.title}
                    imageUri={res.productByProductId.url}
                    onPress={this.navigateToOfferDetails}
                  />
                );
              }
            }}
          </Query>

          <Text style={styles.productDetailText}>DELIVERY REWARD OFFERED</Text>

          <Query<QueryResult, QueryVariables>
            query={GET_PRODUCT_INFO_BY_ID}
            variables={variables}
          >
            {({ loading, data, error }) => {
              if (loading) {
                return <RewardTileLoader loading={loading} />;
                return null;
              }
              if (error) {
                return <Text>Something bad happened</Text>;
              }
              if (data) {
                const res = data.orderById;
                console.log(res);
                const dateDel = moment(res.deliveryDate).format("DD MMM YYYY");
                return (
                  <ChatDeliveryRewardTile
                    reward="16"
                    quantity={res.quantity}
                    deliveryDate={dateDel}
                    total={res.estimatedTotal}
                    deliveryLocation={`${res.locationByLocationId.name}, ${res.locationByLocationId.countryByCountryCode.code}`}
                    airport={res.airportByAirportId.iataCode}
                  />
                );
              }
            }}
          </Query>
          <Text style={styles.productDetailText}>
            DELIVERY REWARD REQUESTED
          </Text>

          <AlertModal
            modalStatus={modalVisible}
            onPress={this.hideModal}
            buttonText={OFFER_DECLINE.BUTTON}
            heading={OFFER_DECLINE.HEADING}
            subHeading={OFFER_DECLINE.SUB_HAEDING}
            description={OFFER_DECLINE.DESCRIPTION}
          />

          <ChatDeliveryRequestedTile
            onPressAccept={() => console.log("A")}
            onPressDecline={this.showDeclineAlert}
            imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
            userName="Sachin"
            location="New York,USA"
            date="21 Nov,2018"
            rewardRequested="42.5"
            total="121.5"
            others
          />
          <Text style={styles.productDetailText}>
            DELIVERY OFFERS BY OTHER TRAVELLERS
          </Text>
          <ChatDeliveryRequestedTile
            imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
            userName="Sachin"
            location="New York,USA"
            date="21 Nov,2018"
            rewardRequested="42.5"
            total="121.5"
          />
          <ChatDeliveryRequestedTile
            imageUri="https://i.ibb.co/CJsfFFY/max-rehkopf.png"
            userName="Sachin"
            location="New York,USA"
            date="21 Nov,2018"
            rewardRequested="42.5"
            total="121.5"
          />
        </ScrollView>
      </View>
    );
  }
}
export default withApollo(BuyerOffers);
