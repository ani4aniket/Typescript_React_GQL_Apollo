import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity
} from "react-native";

import styles from "./styles";

interface Props {
  imageSource: ImageSourcePropType;
  imageText: string;
  onPress: () => void;
}

const ProfileIconView: React.FunctionComponent<Props> = ({
  imageSource,
  imageText,
  onPress
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
      <Image source={imageSource} style={styles.imageView} />
    </TouchableOpacity>
    <Text style={styles.imageText}>{imageText}</Text>
  </View>
);

export default ProfileIconView;
