import * as React from "react";
import { Image, TouchableOpacity, ImageRequireSource } from "react-native";
import styles from "./styles";

interface Props {
  socialMediaType: string;
  imageSource: ImageRequireSource;
  onSelect: (socialMediaType: string) => void;
}

const SocialLoginButton: React.FunctionComponent<Props> = props => {
  const onSelect = () => {
    props.onSelect(props.socialMediaType);
  };
  return (
    <TouchableOpacity onPress={onSelect} style={styles.socialButtonsView}>
      <Image source={props.imageSource} style={styles.socialButtons} />
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
