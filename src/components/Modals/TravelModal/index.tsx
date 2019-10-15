import * as React from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { Color } from "csstype";
import styles from "./styles";

interface Data {
  backgroundColor: Color;
  borderColor: Color;
  color: Color;
  value: string;
  onPress: () => void;
}

interface Props {
  modalStatus?: boolean;
  onPress?: () => void;
  updateModalStatus: (e: boolean) => void;
  data: Array<Data>;
}

const TravelModal: React.FunctionComponent<Props> = ({
  updateModalStatus,
  children,
  modalStatus,
  data
}) => {
  const closeModal = () => updateModalStatus(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={modalStatus}
        onRequestClose={closeModal}
      >
        <TouchableHighlight style={styles.container} onPress={closeModal}>
          <View style={styles.modalView}>
            {data.map((element: Data, index: number) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={element.onPress}
                  style={[
                    styles.button,
                    {
                      backgroundColor: element.backgroundColor,
                      borderColor: element.borderColor
                    }
                  ]}
                >
                  <Text style={[styles.text, { color: element.color }]}>
                    {element.value}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </TouchableHighlight>
      </Modal>
      <TouchableOpacity onPress={closeModal}>{children}</TouchableOpacity>
    </View>
  );
};

export default TravelModal;
