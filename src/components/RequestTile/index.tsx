import * as React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

interface Props {
  requestTime: string;
  name: string;
  uri: string;
}

const RequestTile: React.FunctionComponent<Props> = ({
  requestTime,
  name,
  uri
}) => (
  <View style={styles.container}>
    <Text style={styles.heading}>ITEM REQUESTED BY</Text>
    <Text style={styles.requestTime}>requested {requestTime} ago</Text>
    <View style={styles.body}>
      <Image source={{ uri }} style={styles.image} />
      <View style={styles.description}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  </View>
);

export default RequestTile;
