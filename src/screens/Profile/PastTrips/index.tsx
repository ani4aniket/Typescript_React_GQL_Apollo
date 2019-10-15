import * as React from "react";
import { View } from "react-native";

import { HEADER } from "../../../utils/constants";

import Header from "../../../components/Headers/Header";
import PastTripTile from "../../../components/PastTripTile";

import styles from "./styles";

interface Props {}

const PastTrips: React.FunctionComponent<Props> = () => (
  <View style={styles.container}>
    <Header heading={HEADER.PROFILE} />
    <PastTripTile />
    <PastTripTile />
    <PastTripTile />
  </View>
);

export default PastTrips;
