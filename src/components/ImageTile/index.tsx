import * as React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "./styles";
import Loader from "../Loader";

interface Props {
  optional?: boolean;
  altText: string;
  onPress?: () => void;
  image?: string;
  loading: boolean;
  progress?: number;
  disabled: boolean;
}

const ImageTile: React.FunctionComponent<Props> = ({
  optional,
  altText,
  onPress,
  image,
  loading,
  progress,
  disabled = true
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: disabled ? "#f8f8f5" : "#eee" }
        ]}
        onPress={onPress}
        disabled={disabled}
      >
        {!loading ? (
          image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Text style={styles.text}>{altText}</Text>
          )
        ) : (
          <Loader show={loading} color="#999" size={20} progress={progress} />
        )}
      </TouchableOpacity>
      {optional ? <Text style={styles.optionalText}>(Optional)</Text> : null}
    </View>
  );
};

export default ImageTile;
