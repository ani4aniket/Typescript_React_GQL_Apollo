import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./styles";

const Line = require("../../../assets/images/Line.png");
const PlaneIcon = require("../../../assets/images/PlaneIcon.png");
const Locationdot = require("../../../assets/images/Locationdot.png");

interface Props {}

const PastTripTile: React.FunctionComponent<Props> = () => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.headerView}>
      <Text style={styles.headerText}>10 Nov | 19:00 | BA 780</Text>
    </View>
    <View style={styles.contentView}>
      <View>
        <Text style={styles.locationCodeText}>BOM</Text>
        <Text style={styles.locationNameText}>Mumbai, IN</Text>
      </View>
      <View style={styles.planeView}>
        <Image style={styles.dot} source={Locationdot} />
        <Image style={styles.line} source={Line} />
        <Image style={styles.plane} source={PlaneIcon} />
      </View>
      <View>
        <Text style={styles.locationCodeText}>LHR</Text>
        <Text style={styles.locationNameText}>London, UK</Text>
      </View>
      <View style={styles.amountView}>
        <Text style={styles.amountEarnedText}>Amount Earned</Text>
        <Text style={styles.amountText}> $98.75</Text>
      </View>
    </View>
    <View style={styles.separationView} />
    <View style={styles.footerView}>
      <Text style={styles.footerText}>2 Request</Text>
      <Text style={styles.footerText}>- Offer</Text>
      <Text style={styles.footerText}>- Confirm</Text>
      <Text style={styles.footerText}>Pre-Orders</Text>
    </View>
  </TouchableOpacity>
);

export default PastTripTile;
