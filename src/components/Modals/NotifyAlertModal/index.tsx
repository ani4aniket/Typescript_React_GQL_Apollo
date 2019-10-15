import * as React from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageURISource
} from "react-native";
import styles from "./styles";
import { ALERT } from "../../../utils/constants";

interface State {
  modalVisible: boolean;
}

interface Props {
  modalStatus?: boolean;
  imageUri: ImageURISource;
  itemName: string;
  onPressConfirm: () => void;
  onPressCancel: () => void;
}

export default class NotifyAlertModal extends React.PureComponent<
  Props,
  State
> {
  state = {
    modalVisible: false
  };

  _showModal = () => {
    this.setState({ modalVisible: true });
  };

  _hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const {
      modalStatus,
      itemName,
      imageUri,
      onPressCancel,
      onPressConfirm
    } = this.props;
    const { modalVisible } = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent
          visible={modalStatus || modalVisible}
          onRequestClose={this._hideModal}
        >
          <View style={styles.container}>
            <View style={styles.modalView}>
              <View style={styles.itemView}>
                <Image source={{ uri: imageUri }} style={styles.image} />
                <Text style={styles.itemName}>{itemName}</Text>
              </View>
              <Text style={styles.notifyText}>{ALERT.NOTIFY_PURCHASE}</Text>
              <TouchableOpacity
                onPress={onPressConfirm}
                style={styles.confirmButton}
              >
                <Text style={styles.confirmText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPressCancel}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
