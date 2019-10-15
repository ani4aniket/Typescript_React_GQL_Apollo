import * as React from "react";
import { StyleSheet } from "react-native";
import { Router, Scene, Stack } from "react-native-router-flux";

import COLORS from "./theme/colors";

import AcceptedOrder from "./screens/Profile/AcceptedOrder";
import AddTrip from "./screens/Travel/AddTrip";
import BrowseScreen from "./screens/Shopping/BrowseScreen";
import BuyerChat from "./screens/Chat/BuyerChat";
import BuyerOffers from "./screens/Chat/BuyerOffers";
import ChatHome from "./screens/Chat/ChatHome";
import CreateOrder from "./screens/Shopping/CreateOrder";
import DeliveryDate from "./screens/Shopping/DeliveryDate";
import DeliveryReward from "./screens/Shopping/DeliveryReward";
import DeliveryOfferA from "./screens/Travel/DeliveryOfferA";
import DeliveryOfferB from "./screens/Travel/DeliveryOfferB";
import AddDeliveryReward from "./screens/Travel/DeliveryReward";
import EditOffer from "./screens/Travel/EditOffer";
import FavouriteCountry from "./screens/Shopping/FavouriteCountry";
import Invoice from "./screens/Chat/Invoice";
import LocationSearch from "./screens/UserLocation/LocationSearch";
import LoginHome from "./screens/Login/LoginHome";
import ManualOrderStepA from "./screens/Shopping/ManualOrderStepA";
import ManualOrderStepBA from "./screens/Shopping/ManualOrderStepBA";
import ManualOrderStepBB from "./screens/Shopping/ManualOrderStepBB";
import ManualOrderStepC from "./screens/Shopping/ManualOrderStepC";
import OfferDetails from "./screens/Chat/OfferDetails";
import PastTrips from "./screens/Profile/PastTrips";
import PendingOrders from "./screens/Profile/PendingOrders";
import ProfileEditOrder from "./screens/Profile/ProfileEditOrder";
import ProfileHome from "./screens/Profile/ProfileHome";
import ProfileInformation from "./screens/Profile/ProfileInformation";
import ProfileNewPayment from "./screens/Profile/ProfileNewPayment";
import ProfileOrders from "./screens/Profile/ProfileOrders";
import ProfilePaymentMethod from "./screens/Profile/ProfilePaymentMethod";
import ProfilePayout from "./screens/Profile/ProfilePayout";
import ProfilePayoutForm from "./screens/Profile/ProfilePayoutForm";
import RequestFeed from "./screens/Travel/RequestFeed";
import SearchResult from "./screens/Shopping/SearchResult";
import ShopFeed from "./screens/Shopping/ShopFeed";
import ShoppingHome from "./screens/Shopping/ShoppingHome";
import TravelHome from "./screens/Travel/TravelHome";
import WelcomeScreen from "./screens/UserLocation/WelcomeScreen";

export enum SCENES {
  ADD_CARD = "addCard",
  ADD_TRIP = "addTrip",
  BROWSE_SCREEN = "browseScreen",
  BUYER_CHAT = "buyerChat",
  BUYER_OFFERS = "buyerOffers",
  CHAT = "chat",
  CREATE_ORDER = "createOrder",
  DELIVERY_DATE = "deliveryDate",
  DELIVERY_REWARD = "deliveryReward",
  FAVOURITE_COUNTRY = "favouriteCountry",
  INVOICE = "invoice",
  LOCATION = "location",
  MANUAL_STEP_1 = "manualStepA",
  MANUAL_STEP_2_A = "manualStepBA",
  MANUAL_STEP_2_B = "manualStepBB",
  MANUAL_STEP_3 = "manualStepC",
  OFFER_DETAILS = "offerDetails",
  PAST_TRIPS = "pastTrips",
  PAYMENT_METHOD = "paymentMethod",
  PAYOUT_FORM = "payoutForm",
  PAYOUT_METHOD = "payoutMethod",
  PENDING_ORDERS = "pendingOrders",
  PROFILE = "profile",
  PROFILE_ACCEPTED_ORDER = "profileAcceptedOrder",
  PROFILE_EDIT_ORDER = "profileEditOrder",
  PROFILE_INFORMATION = "profileInformation",
  PROFILE_ORDERS = "profileOrders",
  SEARCH_RESULT = "searchResult",
  SHOP_FEED = "shopFeed",
  SHOPPING = "shopping",
  TABS = "tabs",
  TRAVEL = "travel",
  WELCOME = "welcome",
  LOGIN = "login",
  REQUEST_FEED = "requestFeed",
  DELIVERY_OFFER_A = "deliveryOfferA",
  DELIVERY_OFFER_B = "deliveryOfferB",
  ADD_DELIVERY_REWARD = "addDeliveryReward",
  EDIT_OFFER = "editOffer"
}

interface Props {}

const Routes: React.FunctionComponent<Props> = () => (
  <Router sceneStyle={styles.baseRouter}>
    <Stack hideNavBar key="root">
      <Scene
        key={SCENES.WELCOME}
        activeBackgroundColor={COLORS.WHITE}
        component={WelcomeScreen}
      />
      <Scene key={SCENES.LOCATION} component={LocationSearch} />
      <Scene title="Add Trip" key={SCENES.ADD_TRIP} component={AddTrip} />
      <Scene
        title="Delivery Offer"
        key={SCENES.REQUEST_FEED}
        component={RequestFeed}
      />
      <Scene title="Edit Offer" key={SCENES.EDIT_OFFER} component={EditOffer} />
      <Scene
        title="Browse Screen"
        key={SCENES.BROWSE_SCREEN}
        component={BrowseScreen}
      />
      <Scene
        title="Create Order"
        key={SCENES.CREATE_ORDER}
        component={CreateOrder}
      />
      <Scene
        title="Delivery Date"
        key={SCENES.DELIVERY_DATE}
        component={DeliveryDate}
      />
      <Scene
        title="Delivery Reward"
        key={SCENES.DELIVERY_REWARD}
        component={DeliveryReward}
      />
      <Scene
        title="Delivery Offer"
        key={SCENES.DELIVERY_OFFER_A}
        component={DeliveryOfferA}
      />
      <Scene
        title="Delivery Offer"
        key={SCENES.DELIVERY_OFFER_B}
        component={DeliveryOfferB}
      />
      <Scene
        title="Add Delivery Offer"
        key={SCENES.ADD_DELIVERY_REWARD}
        component={AddDeliveryReward}
      />
      <Scene
        title="Buyer Chat"
        key={SCENES.BUYER_CHAT}
        component={BuyerChat}
        hideNavBar
      />
      <Scene
        title="Buyer Offers"
        key={SCENES.BUYER_OFFERS}
        component={BuyerOffers}
        hideNavBar
        initial
      />
      <Scene
        title="Offer Details"
        key={SCENES.OFFER_DETAILS}
        component={OfferDetails}
        hideNavBar
      />
      <Scene
        title="Invoice"
        key={SCENES.INVOICE}
        component={Invoice}
        hideNavBar
      />
      <Scene
        title="Profile Orders"
        key={SCENES.PROFILE_ORDERS}
        component={ProfileOrders}
        hideNavBar
      />
      <Scene
        title="Pending Orders"
        key={SCENES.PENDING_ORDERS}
        component={PendingOrders}
        hideNavBar
      />
      <Scene
        title="Orders"
        key={SCENES.PROFILE_EDIT_ORDER}
        component={ProfileEditOrder}
        hideNavBar
      />
      <Scene
        title="Accepted Orders"
        key={SCENES.PROFILE_ACCEPTED_ORDER}
        component={AcceptedOrder}
        hideNavBar
      />
      <Scene
        title="Past Trips"
        key={SCENES.PAST_TRIPS}
        component={PastTrips}
        hideNavBar
      />
      <Scene
        title="Payout Method"
        key={SCENES.PAYOUT_METHOD}
        component={ProfilePayout}
        hideNavBar
      />
      <Scene
        title="Payout Form"
        key={SCENES.PAYOUT_FORM}
        component={ProfilePayoutForm}
        hideNavBar
      />
      <Scene
        title="Profile Information"
        key={SCENES.PROFILE_INFORMATION}
        component={ProfileInformation}
        hideNavBar
      />
      <Scene
        title="Payment Method"
        key={SCENES.PAYMENT_METHOD}
        component={ProfilePaymentMethod}
        hideNavBar
      />
      <Scene
        title="Add Card"
        key={SCENES.ADD_CARD}
        component={ProfileNewPayment}
        hideNavBar
      />

      <Scene
        title="Favourite Country"
        key={SCENES.FAVOURITE_COUNTRY}
        component={FavouriteCountry}
      />
      <Scene
        title="Manual Order A"
        key={SCENES.MANUAL_STEP_1}
        component={ManualOrderStepA}
      />
      <Scene
        title="Manual Order BA"
        key={SCENES.MANUAL_STEP_2_A}
        component={ManualOrderStepBA}
      />
      <Scene
        title="Manual Order BB"
        key={SCENES.MANUAL_STEP_2_B}
        component={ManualOrderStepBB}
      />
      <Scene
        title="Manual Order C"
        key={SCENES.MANUAL_STEP_3}
        component={ManualOrderStepC}
      />
      <Scene
        title="Search Result"
        key={SCENES.SEARCH_RESULT}
        component={SearchResult}
      />
      <Scene
        title="Search Result"
        key={SCENES.SHOP_FEED}
        component={ShopFeed}
      />
      <Scene title="Login" key={SCENES.LOGIN} component={LoginHome} />
      <Scene
        tabs
        key={SCENES.TABS}
        tabBarPosition="bottom"
        activeBackgroundColor="white"
        inactiveBackgroundColor="white"
        inactiveTintColor="black"
        activeTintColor={COLORS.SEA_BLUE}
        tabBarStyle={styles.tabBar}
        swipeEnabled={false}
        animationEnabled={false}
      >
        {/* Tab navigation stack */}
        <Scene
          title="Travel"
          key={SCENES.TRAVEL}
          component={TravelHome}
          hideNavBar
        />
        <Scene title="Chat" key={SCENES.CHAT} component={ChatHome} hideNavBar />
        <Scene
          title="Shopping"
          key={SCENES.SHOPPING}
          component={ShoppingHome}
        />
        <Scene title="Profile" key={SCENES.PROFILE} component={ProfileHome} />
      </Scene>
    </Stack>
  </Router>
);

const styles = StyleSheet.create({
  baseRouter: {
    backgroundColor: COLORS.WHITE
  },
  tabBar: {
    backgroundColor: COLORS.WHITE
  }
});

export default Routes;
