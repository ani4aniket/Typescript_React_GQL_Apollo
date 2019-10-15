import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView
} from "react-native";
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native-gesture-handler";

import ProductsTile from "../../../components/ProductsTile";
import SearchBar from "../../../components/SearchBar";
import UserLocationStrip from "../../../components/UserLocationStrip";
import TravelModal from "../../../components/Modals/TravelModal";

import PendingTripResults from "../../../components/PendingTripResults";

import styles from "./styles";
import { SCENES } from "../../../routes";
import colors from "../../../theme/colors";
import ExpoIcon, { IconType } from "../../../components/Icon";
import AlertModal from "../../../components/Modals/AlertModal";
import { ALERT } from "../../../utils/constants";
import NotifyAlertModal from "../../../components/Modals/NotifyAlertModal";

interface State {
  trip: boolean;
  modalStatus: boolean;
  alertModalStatus: boolean;
  confirmModalStatus: boolean;
}

interface Props {}

class TravelHome extends React.PureComponent<Props, State> {
  state = {
    trip: true,
    modalStatus: false,
    alertModalStatus: false,
    confirmModalStatus: false
  };

  _navigate = () => {
    this.setState({ modalStatus: false });
    Actions[SCENES.ADD_TRIP]({ edit: false });
  };

  onPressEdit = () => {
    this.setState({ modalStatus: false });
    Actions[SCENES.ADD_TRIP]({ edit: true });
  };

  _pressed = () => console.log("pressed");

  updateModalStatus = (modalStatus: boolean) => this.setState({ modalStatus });

  _showAlert = () => {
    return Alert.alert(
      "Alert",
      "Notifications are mute for this trip",
      [{ text: "OK", onPress: this._disableMoreModal }],
      {
        cancelable: false
      }
    );
  };

  _editAlert = () => {
    return Alert.alert(
      ALERT.SURE,
      ALERT.EDIT_DESCRIPTION,
      [
        { text: "EDIT", onPress: this.onPressEdit, style: "cancel" },
        {
          text: "Cancel",
          onPress: this._disableMoreModal
        }
      ],
      { cancelable: false }
    );
  };

  _deletAlert = () => {
    return Alert.alert(
      ALERT.SURE,
      ALERT.DELETE_DESCRIPTION,
      [
        { text: "DELETE", onPress: this._navigate, style: "destructive" },
        {
          text: "EDIT",
          onPress: () => this._pressed
        }
      ],
      { cancelable: false }
    );
  };

  _showConfirmModal = () => {
    this.setState({ confirmModalStatus: true });
  };

  _hideConfirmModal = () => {
    this.setState({ confirmModalStatus: false });
  };

  _disableMoreModal = () => {
    this.setState({ modalStatus: false });
  };

  _openTravelModal = () => {
    this.setState({ modalStatus: true });
  };

  render() {
    const {
      trip,
      modalStatus,
      alertModalStatus,
      confirmModalStatus
    } = this.state;
    const data = [
      {
        backgroundColor: colors.BUTTON.BG_PRIMARY,
        borderColor: colors.BUTTON.BG_PRIMARY,
        color: "white",
        value: "Edit Trip",
        onPress: this._editAlert
      },
      {
        backgroundColor: "white",
        borderColor: colors.BUTTON.BG_PRIMARY,
        color: colors.BUTTON.BG_PRIMARY,
        value: "Mute Notifications",
        onPress: this._showAlert
      },
      {
        backgroundColor: "white",
        borderColor: colors.RED,
        color: colors.RED,
        value: "Delete Trip",
        onPress: this._deletAlert
      },
      {
        backgroundColor: colors.ORANGE,
        borderColor: colors.ORANGE,
        color: "white",
        value: "Cancel",
        onPress: this._disableMoreModal
      }
    ];
    return (
      <SafeAreaView style={styles.container}>
        <UserLocationStrip />
        <AlertModal
          modalStatus={alertModalStatus}
          alert
          heading={ALERT.NOTIFY_HEADING}
          color={colors.BUTTON.BG_PRIMARY}
          buttonText="OK"
        />
        <SearchBar
          placeholder={ALERT.SEARCH_HEADING}
          placeholderTextColor="#484848"
          inputStyle={styles.input}
        />
        <View style={styles.addTripView}>
          <Text style={[styles.aboutLocationText, { flex: 1 }]}>
            {trip ? "LATEST TRIP" : " YOUR NEXT TRIP"}
          </Text>
          <TouchableOpacity
            style={styles.addTripButton}
            onPress={this._navigate}
          >
            <Text style={styles.addTripButtonText}>
              {trip ? "ADD MORE" : "ADD TRIP"}
            </Text>
            <NotifyAlertModal
              imageUri="https://res.cloudinary.com/airbuk/image/upload/country-flags/in.png"
              itemName="(Item Name)"
              modalStatus={confirmModalStatus}
              onPressCancel={this._hideConfirmModal}
              onPressConfirm={this._hideConfirmModal}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scroll}>
          <TravelModal
            data={data}
            modalStatus={modalStatus}
            updateModalStatus={this.updateModalStatus}
          >
            <View style={styles.basicTile}>
              <Text style={styles.basicTileText}>
                Trips you add will appear here
              </Text>
              <ExpoIcon
                type={IconType.MATERIAL_COMMUNITY_ICONS}
                name="gesture-tap"
                style={styles.icon}
              />
            </View>
          </TravelModal>
          <PendingTripResults
            onPressMore={this._openTravelModal}
            travellerId="6088ac12-efbc-4fc9-abf7-5f93fb5e1e83"
          />
          <View style={styles.userLocationView}>
            <Text style={styles.userLocationText}>
              MAKE MONEY BY DELIVERING THESE ITEMS FROM
            </Text>
            <Text style={[styles.userLocationText, { color: colors.ORANGE }]}>
              USER LOCATION
            </Text>
          </View>
          <ProductsTile
            status="deposited"
            heading="BEIGESOUNDS"
            timeElasped="10 seconds ago"
            imageUri="https://res.cloudinary.com/airbuk/image/upload/country-flags/in.png"
            deliveryLocation="London, UK"
            dueDate="15 Nov 2018"
            buyingLocation="Mumbai international Airport, Swatch Showroom after security"
            price="79"
            quantity="1"
            reward="20"
            buttonText="Make delivery offer"
            onPress={() => Actions[SCENES.DELIVERY_OFFER]()}
          />
          <ProductsTile
            status="purchased"
            heading="BEIGESOUNDS"
            timeElasped="10 seconds ago"
            imageUri="https://res.cloudinary.com/airbuk/image/upload/country-flags/in.png"
            reward="20"
            code="W5A15"
            onPress={this._showConfirmModal}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default TravelHome;
