import * as React from "react";
import { TouchableHighlight, Text } from "react-native";

export interface LocationDetail {
  id: string;
  name: string | null;
  region: string | null;
  subRegion: string | null;
  latitude: string | null;
  longitude: string | null;
}

interface LocationItemProps {
  location: LocationDetail;
  onLocationSelect: (location: LocationDetail) => void;
}

const LocationItem: React.FunctionComponent<LocationItemProps> = props => {
  const onSelect = () => {
    props.onLocationSelect(props.location);
  };
  return (
    <TouchableHighlight key={props.location.id} onPress={onSelect}>
      <Text>
        {props.location.name}, {props.location.region},{" "}
        {props.location.subRegion}
      </Text>
    </TouchableHighlight>
  );
};

export default LocationItem;
