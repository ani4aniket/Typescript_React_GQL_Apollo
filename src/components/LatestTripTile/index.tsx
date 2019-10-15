import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import Icon, { IconType } from "../Icon";
import { COLORS } from "../../theme";
import { TripDetail } from "../PendingTripResults";

import styles from "./styles";

const Line = require("../../../assets/images/Line.png");
const PlaneIcon = require("../../../assets/images/PlaneIcon.png");
const Locationdot = require("../../../assets/images/Locationdot.png");

interface Props extends TripDetail {}
interface State {
  selected: number;
}

const footer = [
  {
    count: 2,
    value: "Request"
  },
  {
    count: 0,
    value: "Offer"
  },
  {
    count: 0,
    value: "Confirm"
  },
  {
    count: 0,
    value: "Pre-Orders"
  }
];

const LatestTripTile: React.FunctionComponent<Props> = ({
  departureDate,
  flightNumber,
  departureAirportDetails,
  arrivalAirportDetails,
  onPressMore
}) => {
  const [state, updateState] = React.useState<State>({
    selected: 0
  });

  const { selected } = state;

  const setState = (newState: Partial<State>) =>
    updateState(prevState => ({ ...prevState, ...newState }));

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>
          {departureDate} | {flightNumber}
        </Text>
        <TouchableOpacity onPress={onPressMore}>
          <Icon
            style={styles.threeDotIcon}
            color="#9b9b9b"
            type={IconType.ENTYPO}
            name="dots-three-horizontal"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentView}>
        <View style={styles.columnView}>
          <Text style={styles.locationCodeText}>
            {departureAirportDetails.iataCode}
          </Text>
          <Text style={styles.locationNameText}>
            {departureAirportDetails.name}
          </Text>
        </View>
        <View style={styles.planeView}>
          <Image style={styles.plane} source={PlaneIcon} />
          <Image style={styles.dot} source={Locationdot} />
          <Image style={styles.line} source={Line} />
          <Image style={styles.dot} source={Locationdot} />
        </View>
        <View style={styles.columnView}>
          <Text style={[styles.locationCodeText, { textAlign: "right" }]}>
            {arrivalAirportDetails.iataCode}
          </Text>
          <Text style={[styles.locationNameText, { textAlign: "right" }]}>
            {arrivalAirportDetails.name}
          </Text>
        </View>
      </View>
      <View style={styles.separationView} />
      <View style={styles.footerView}>
        {footer.map((element, index) => (
          <TouchableOpacity
            onPress={() => setState({ selected: index })}
            key={index}
            style={[
              styles.footer,
              {
                backgroundColor:
                  selected === index ? COLORS.BUTTON.BG_PRIMARY : "white"
              }
            ]}
          >
            <Text
              style={[
                styles.footerText,
                {
                  color: selected === index ? "white" : COLORS.BUTTON.BG_PRIMARY
                }
              ]}
            >
              {element.count || "-"} {element.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default React.memo(LatestTripTile);
