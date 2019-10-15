import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from "react-native";
import { Actions } from "react-native-router-flux";
import _ from "lodash";

import { SCENES } from "../../../routes";
import Icon, { IconType } from "../../../components/Icon";
import ChatProductInfoTile from "../../../components/ChatProductInfoTile";

import { Query, Mutation } from "react-apollo";
import styles from "./styles";
import Message from "../../../components/Message";
import chatClient from "../../../apollo/chatClient";
import { GET_MESSAGES, GET_PRODUCT_INFO_BY_ID } from "../../../apollo/queries";
import { SEND_MESSAGE } from "../../../apollo/mutations";
import MessageLoader from "../../../components/Message/MessageLoader";
import moment from "moment";
import TileLoader from "../../../components/ChatProductInfoTile/TileLoader";

interface Props {
  id: string;
  memberId: string;
}

interface State {
  toggleSharing: boolean;
  loading: boolean;
  message: string;
}

interface QueryResult {
  title: string;
  url: string;
}

interface QueryVariables {
  id: string;
}
class BuyerChat extends React.PureComponent<Props, State> {
  state = {
    toggleSharing: false,
    messages: [],
    loading: true,
    message: "",
    productName: "",
    productLocation: "",
    productDate: ""
  };

  handleToggleChange = () => {
    this.setState(prevState => ({ toggleSharing: !prevState.toggleSharing }));
  };

  getMessage = () => {
    const { id } = this.props;
    chatClient
      .query({
        query: GET_MESSAGES,
        variables: { id }
      })
      .then(res =>
        this.setState({
          messages: res.data.messages.messagesArray,
          loading: false
        })
      )
      .catch(err => this.setState({ loading: false }));
  };

  componentDidMount = () => {
    this.getMessage();
  };

  dayDifference = (prevDay: number, currentDay: number) => {
    return moment
      .duration(
        moment
          .unix(prevDay / 1000)
          .startOf("day")
          .diff(moment.unix(currentDay / 1000).startOf("day"))
      )
      .asDays();
  };

  sendMessage = () => {
    const { messages, message } = this.state;
    const { memberId } = this.props;
    this.setState({ loading: message.length ? true : false });
    chatClient
      .mutate({
        mutation: SEND_MESSAGE,
        variables: { id: memberId, content: message }
      })
      .then(res => {
        this.setState({
          messages: [...messages, res.data.sendMessage],
          message: "",
          loading: false
        });
      })
      .catch(err => this.setState({ loading: false }));
  };

  render() {
    const { toggleSharing, messages, message, loading } = this.state;
    const variables: QueryVariables = {
      id: "4b9f8ee8-b782-11e9-bfe4-0242ac120002"
    };
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <SafeAreaView>
          <Query<QueryResult, QueryVariables>
            query={GET_PRODUCT_INFO_BY_ID}
            variables={variables}
          >
            {({ loading, data, error }) => {
              if (loading) {
                return <TileLoader loading={loading} />;
              }
              if (error) {
                return <Text>Something bad happened</Text>;
              }
              if (data) {
                const res = data.orderById;
                console.log(res);
                const dateDel = moment(res.deliveryDate).format("DD MMM YYYY");
                return (
                  <ChatProductInfoTile
                    onPress={() => Actions.push(SCENES.BUYER_OFFERS)}
                    heading={res.productByProductId.title}
                    imageUri={res.productByProductId.url}
                    deliveryLocation={`${res.locationByLocationId.name}, ${res.locationByLocationId.countryByCountryCode.name}`}
                    dueDate={dateDel}
                  />
                );
              }
              return <Text>Type something...</Text>;
            }}
          </Query>

          <ScrollView style={styles.scroll}>
            <MessageLoader loading={loading} />
            {_.orderBy(messages, ["creationTime"], ["asc"]).map(
              (message, index, messageArray) => (
                <View key={index}>
                  {(index === 0 ||
                    this.dayDifference(
                      message.creationTime,
                      messageArray[index - 1].creationTime
                    ) >= 1) && (
                    <Text style={styles.userMessageDate}>
                      {moment
                        .unix(message.creationTime / 1000)
                        .format("MMM DD, YYYY")}
                    </Text>
                  )}
                  <Message
                    time={message.creationTime}
                    message={message.content}
                    type={
                      message.author.username === "pranjalnadhani"
                        ? "sender"
                        : "receiver"
                    }
                    avatar={message.author.avatar}
                  />
                </View>
              )
            )}
          </ScrollView>
          {toggleSharing ? (
            <View style={styles.sharingView}>
              <View style={styles.sharingRowView}>
                <Icon
                  style={styles.camerIcon}
                  color="#484848"
                  type={IconType.FONT_AWESOME}
                  name="photo"
                />
                <Text style={styles.sharingText}>Share an Image</Text>
              </View>
              <View style={styles.separationView} />
              <View style={styles.sharingRowView}>
                <Icon
                  style={styles.camerIcon}
                  color="#484848"
                  type={IconType.ENTYPO}
                  name="location-pin"
                />
                <Text style={styles.sharingText}>Share your location</Text>
              </View>
            </View>
          ) : null}
          <View style={styles.messageSendView}>
            <TouchableOpacity
              style={styles.camerIconBackground}
              onPress={this.getMessage}
            >
              <Icon
                style={styles.camerIcon}
                color="#484848"
                type={IconType.SIMPLE_LINE_ICONS}
                name="reload"
              />
            </TouchableOpacity>
            <TextInput
              style={styles.messageInputView}
              placeholder="Type here to send message"
              value={message}
              onChangeText={message => {
                this.setState({ message: message });
              }}
            />
            <TouchableOpacity>
              <Icon
                style={styles.threeDotIcon}
                color="#484848"
                type={IconType.ENTYPO}
                name="dots-three-vertical"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.camerIconBackground,
                opacity: message.replace(/\s/g, "").length && !loading ? 1 : 0.5
              }}
              disabled={!message.replace(/\s/g, "").length && !loading}
              onPress={this.sendMessage}
            >
              <Icon
                style={styles.threeDotIcon}
                color="#484848"
                type={IconType.ION_ICONS}
                name="md-send"
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default BuyerChat;
