import * as React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { Button } from "react-native-elements";
import DeviceInfo from "react-native-device-info";

import { fetchLocationData } from "../../reducers/locationReducer/locationActions";
import { ResponseInterface } from "../../reducers/locationReducer/locationInterface";
import { StoreInterface } from "../../reducers";

import { getLocationCoordinates } from "../../utils/location";
import { getPlatform } from "../../utils";

import styles from "./styles";

// Interface Definitions
interface OwnProps {
  onSuccess: () => void;
  onError: (errorMessage: string) => void;
}

interface StateToProps {
  data: ResponseInterface | null;
}

interface DispatchToProps {
  fetchLocationData: typeof fetchLocationData;
}

// Merge all interfaces to create a "Props" interface for the main component.
type Props = OwnProps & StateToProps & DispatchToProps;

interface State {
  loadingSpinner: boolean;
  locationFound: boolean;
}

class DetectLocationButton extends React.PureComponent<Props, State> {
  state: State = {
    loadingSpinner: false,
    locationFound: false
  };

  static getDerivedStateFromProps = (nextProps: Props, prevState: State) => {
    if (nextProps.data !== null && !prevState.locationFound) {
      return {
        locationFound: true,
        loadingSpinner: false
      };
    }
    return null;
  };

  componentDidUpdate() {
    if (this.state.locationFound) {
      this.props.onSuccess();
    }
  }

  getLocationAsync = async () => {
    if (getPlatform() === "android" && DeviceInfo.isEmulator()) {
      this.props.onError(
        "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
      );
    } else {
      this.setState({ loadingSpinner: true });
      const locationCoordinates = await getLocationCoordinates();
      if (locationCoordinates.data) {
        this.props.fetchLocationData(
          locationCoordinates.data.latitude,
          locationCoordinates.data.longitude
        );
      } else if (locationCoordinates.error) {
        this.setState({ loadingSpinner: false });
        this.props.onError(locationCoordinates.error.message);
      }
    }
  };

  render() {
    return (
      <Button
        icon
        title="Get my location"
        onPress={this.getLocationAsync}
        containerStyle={styles.detectLocationCTA}
        buttonStyle={styles.buttonStyleCTA}
        disabledStyle={styles.disabledDetectLocationCTA}
        disabled={this.state.loadingSpinner}
        loading={this.state.loadingSpinner}
      />
    );
  }
}

// Functions used in the connect HOC by react-redux
const mapStateToProps = (state: StoreInterface): StateToProps => ({
  data: state.locationData.response
});

const dispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators({ fetchLocationData }, dispatch);

export default connect(
  mapStateToProps,
  dispatchToProps
)(DetectLocationButton);
