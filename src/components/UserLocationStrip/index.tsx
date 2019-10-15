import * as React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import { SCENES } from "../../routes";
import { ResponseInterface } from "../../reducers/locationReducer/locationInterface";
import { StoreInterface } from "../../reducers";

import styles from "./styles";

interface OwnProps {}

interface StateToProps {
  data: ResponseInterface | null;
}

type Props = OwnProps & StateToProps;

const UserLocationStrip: React.FunctionComponent<Props> = props => {
  const onSelect = () => {
    Actions.reset(SCENES.LOCATION);
  };
  return (
    <TouchableHighlight style={styles.location} onPress={onSelect}>
      <View>
        <Text style={styles.aboutLocationText}>YOUR LOCATION</Text>
        {props.data && (
          <Text style={styles.locationText}>
            {props.data.location.name}, {props.data.location.region}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  );
};

const mapStateToProps = (state: StoreInterface): StateToProps => ({
  data: state.locationData.response
});

export default connect(mapStateToProps)(UserLocationStrip);
