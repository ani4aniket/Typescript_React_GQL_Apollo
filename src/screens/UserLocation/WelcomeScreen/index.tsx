import * as React from "react";
import { Button } from "react-native-elements";
import { Text, SafeAreaView, Alert } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import SplashScreen from "react-native-splash-screen";

import { SCENES } from "../../../routes";
import { StoreInterface } from "../../../reducers";
import { fetchLocationData } from "../../../reducers/locationReducer/locationActions";
import { ResponseInterface } from "../../../reducers/locationReducer/locationInterface";
import { getLocationCoordinates } from "../../../utils/location";

import DetectLocationButton from "../../../components/DetectLocationButton";

import styles from "./styles";

interface OwnProps {}

interface StateToProps {
  data: ResponseInterface | null;
}

interface DispatchToProps {
  fetchLocationData: typeof fetchLocationData;
}

type Props = OwnProps & StateToProps & DispatchToProps;

class WelcomeScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.initLocation();
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (
      prevProps.data !== this.props.data &&
      this.props.data &&
      this.props.data.location.id
    ) {
      SplashScreen.hide();
    }
  }

  initLocation = async () => {
    const locationCoordinates = await getLocationCoordinates({ silent: true });
    if (locationCoordinates.data) {
      this.props.fetchLocationData(
        locationCoordinates.data.latitude,
        locationCoordinates.data.longitude
      );
    } else {
      SplashScreen.hide();
    }
  };

  manualLocationCTAHandler = () => {
    Actions.reset(SCENES.LOCATION);
  };

  autoLocationSuccessHandler = () => {
    Actions.reset(SCENES.TABS);
  };

  autoLocationFailureHandler = (errorMessage: string) => {
    Alert.alert(
      "Could not fetch location",
      errorMessage,
      [
        {
          text: "Enter Location manually",
          onPress: this.manualLocationCTAHandler
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Why turn on your location?</Text>
        <Text style={styles.paragraph}>
          Your location will help us to show you information relevant to you and
          improve your experience of using Airbük.
        </Text>
        <DetectLocationButton
          onSuccess={this.autoLocationSuccessHandler}
          onError={this.autoLocationFailureHandler}
        />
        <Button
          type="clear"
          title="Set location manually"
          onPress={this.manualLocationCTAHandler}
          containerStyle={styles.manualLocationCTA}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: StoreInterface): StateToProps => ({
  data: state.locationData.response
});

const dispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators({ fetchLocationData }, dispatch);

export default connect(
  mapStateToProps,
  dispatchToProps
)(WelcomeScreen);
