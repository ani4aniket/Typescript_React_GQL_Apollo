import React from "react";
import { View, Text, ImageRequireSource } from "react-native";
import { Actions } from "react-native-router-flux";
import ImagePicker from "react-native-image-picker";
import Toast from "react-native-easy-toast";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import Header from "../../../components/Headers/Header";
import ImageTile from "../../../components/ImageTile";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import styles from "./styles";
import { SCENES } from "../../../routes";
import { HEADER, IMAGE_UPLOAD } from "../../../utils/constants";
import PageHeader from "../../../components/PageHeader";
import { StoreInterface } from "../../../reducers";
import {
  uploadProductImageInitiated,
  uploadProductImageRemoveStatusMessage
} from "../../../reducers/productReducer/productActions";
import { ResponseImageSuccessData } from "../../../reducers/productReducer/productInterface";

type Props = StateToProps & DispatchToProps;

interface StateToProps {
  response: ResponseImageSuccessData | null;
  loading: boolean;
  message: string | null;
  progress: number;
}

interface DispatchToProps {
  uploadProductImageInitiated: typeof uploadProductImageInitiated;
  uploadProductImageRemoveStatusMessage: typeof uploadProductImageRemoveStatusMessage;
}

interface State {
  website: string;
  name: string;
  brand: string;
  additional: string;
  uri: ImageRequireSource;
  images: Array<ImageRequireSource>;
  index: number;
}

class ManualOrderStepA extends React.PureComponent<Props, State> {
  private myRef = React.createRef<Toast>();

  state: State = {
    avatarSource: null,
    website: "",
    name: "",
    brand: "",
    additional: "",
    images: ["", "", ""],
    uri: "",
    index: -1
  };

  _navigate = () => {
    Actions.push(SCENES.MANUAL_STEP_2_A);
  };

  uploadImage = (index: number) => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        this.props.uploadProductImageInitiated(
          response.uri,
          `${Math.floor(Date.now()).toString()}.jpg`,
          response.type,
          "airbuk-products",
          "eu-west-1",
          "AKIATDMEUQ6FR4SIUDKW",
          "GfZkIsvQ7BQb7i4/Z8f8WRN2+ejjMczu3LlHZdXT",
          201
        );
        this.setState({
          uri: response.uri,
          index
        });
      }
    });
  };

  componentDidUpdate() {
    const { index, uri } = this.state;
    if (this.props.message) {
      if (this.props.message === IMAGE_UPLOAD.SUCCESS && index !== -1) {
        this.setState(prevState => ({
          images: [
            ...prevState.images.slice(0, index),
            uri,
            ...prevState.images.slice(index)
          ]
        }));
      }
      this.setState({ index: -1 });
      this.myRef.current!.show(this.props.message, 1000, () => {
        this.props.uploadProductImageRemoveStatusMessage();
      });
    }
  }

  render() {
    const { progress, loading } = this.props;

    const inputArray = [
      {
        heading: "Product Website",
        placeholder: "Copy paste the exact website address here",
        value: this.state.website,
        onChangeText: (website: string) => this.setState({ website })
      },
      {
        heading: "Product Name",
        placeholder: "E.g. 'iPhone XS'",
        value: this.state.name,
        onChangeText: (name: string) => this.setState({ name })
      },
      {
        heading: "Product Barand (Optional)",
        placeholder: "Eg. 'Apple'",
        value: this.state.brand,
        onChangeText: (brand: string) => this.setState({ brand })
      },
      {
        heading: "Addtional Details",
        placeholder: "E.g. '256 Gb, white color'",
        value: this.state.additional,
        onChangeText: (additional: string) => this.setState({ additional })
      }
    ];

    const imageTileArray = [
      {
        altText: "Upload Product Image",
        optional: false
      },
      {
        altText: "Upload Product Image",
        optional: true
      },
      {
        altText: "Upload Product Image",
        optional: true
      }
    ];

    return (
      <View style={styles.container}>
        <Header heading={HEADER.CREATE_ORDER} />
        <PageHeader page={1} />
        <View style={styles.body}>
          <Text style={styles.heading}>PRODUCT DETAILS</Text>
        </View>
        <View style={styles.productImagesView}>
          {imageTileArray.map((element, index) => {
            return (
              <ImageTile
                loading={index === this.state.index}
                progress={progress}
                disabled={loading}
                key={index}
                altText={element.altText}
                onPress={() => this.uploadImage(index)}
                optional={element.optional}
                image={this.state.images[index]}
              />
            );
          })}
        </View>
        <View style={styles.inputView}>
          {inputArray.map((element, index) => {
            return (
              <Input
                key={index}
                placeholder={element.placeholder}
                heading={element.heading}
                onChangeText={element.onChangeText}
              />
            );
          })}
        </View>
        <Toast ref={this.myRef} />
        <Button icon text="Add Product Location" onPress={this._navigate} />
      </View>
    );
  }
}

const mapStateToProps = (state: StoreInterface): StateToProps => ({
  loading: state.product.loading,
  message: state.product.message,
  progress: state.product.progress,
  response: state.product.response
});

const dispatchToProps = (dispatch: Dispatch): DispatchToProps =>
  bindActionCreators(
    { uploadProductImageInitiated, uploadProductImageRemoveStatusMessage },
    dispatch
  );

export default connect(
  mapStateToProps,
  dispatchToProps
)(ManualOrderStepA);
