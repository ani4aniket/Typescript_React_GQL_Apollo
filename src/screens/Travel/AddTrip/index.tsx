import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Switch,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";
import { Query, Mutation } from "react-apollo";
import Toast from "react-native-easy-toast";
import { Actions } from "react-native-router-flux";
import _ from "lodash";
import moment from "moment";
import Header from "../../../components/Headers/Header";
import styles from "./styles";
import { HEADER, TRIP } from "../../../utils/constants";
import AlertModal from "../../../components/Modals/AlertModal";
import colors from "../../../theme/colors";
import Search from "../../../components/Modals/Search";
import { SEARCH_AIRPORTS_QUERY } from "../../../apollo/queries";
import { IconType } from "../../../components/Icon";
import DateTimeModal from "../../../components/Modals/DateTimeModal";
import { ADD_TRIP } from "../../../apollo/mutations";

interface Props {
  edit: boolean;
}

interface State {
  roundTrip: boolean;
  rfStatus: boolean;
  modalVisible: boolean;
  query: string;
  departure: Airport | null;
  arrival: Airport | null;
  airline: string;
  flightDate: string | null;
  flightNumber: string;
  loading: boolean;
  error: boolean;
  departureDate: string | null;
  returnDate: string | null;
}

interface Airport {
  id: number;
  name: string;
  iataCode: string;
  type: string;
}

interface QueryResult {
  matchesByName: { airports: Airport[] };
  matchesByIataCode: { airports: Airport[] };
}

interface CreateTrip {
  clientMutationId: string | null;
  trip: {
    id: string;
  };
}

interface MutationResult {
  data: {
    createTrip: CreateTrip;
  };
}

class AddTrip extends React.PureComponent<Props, State> {
  state: State = {
    roundTrip: false,
    rfStatus: false,
    modalVisible: false,
    query: "",
    departure: null,
    arrival: null,
    airline: "",
    flightNumber: "",
    flightDate: null,
    departureDate: null,
    returnDate: null,
    loading: false,
    error: false
  };

  private myRef = React.createRef<Toast>();

  setSearchQuery = (query: string) => this.setState({ query });

  onDepartureSelect = (departure: Airport) => this.setState({ departure });

  onArrivalSelect = (arrival: Airport) => this.setState({ arrival });

  keyExtractor = (element: Airport) => element.iataCode;

  changeMode = () => {
    this.setState(prevState => ({ rfStatus: !prevState.rfStatus }));
  };

  onSubmitModal = () => {
    this.setState({ modalVisible: false });
    Actions.pop();
  };

  onSwitch = () =>
    this.setState(prevState => ({ roundTrip: !prevState.roundTrip }));

  dataRenderer = (airport: Airport | null) => {
    return airport
      ? `${airport.iataCode} - ${airport.name}`
      : "Eg. Emirates Airlines";
  };

  onMutationSuccess = () => {
    this.setState({ loading: false, modalVisible: true });
  };

  onMutationFail = () => {
    this.setState({ loading: false, error: true });
  };

  disabled = () => {
    const {
      rfStatus,
      airline,
      flightNumber,
      flightDate,
      departure,
      arrival,
      roundTrip,
      departureDate,
      returnDate,
      loading
    } = this.state;

    if (loading) return true;
    else if (rfStatus && (!airline || !flightNumber || !flightDate))
      return false;
    else if (
      !rfStatus &&
      (!departure || !arrival || !departureDate || roundTrip
        ? !returnDate
        : null)
    )
      return false;
    return true;
  };

  airportData = (data: QueryResult | undefined) => {
    return (
      (data &&
        data.matchesByIataCode &&
        data.matchesByName &&
        _.union(
          data.matchesByIataCode.airports,
          data.matchesByName.airports
        )) ||
      null
    );
  };

  componentDidUpdate() {
    if (this.state.error)
      this.myRef.current!.show("Something went wrong, Try Again.", 1000, () => {
        this.setState({ error: false });
      });
  }

  render() {
    const {
      roundTrip,
      rfStatus,
      modalVisible,
      query,
      airline,
      flightNumber,
      flightDate,
      loading,
      departureDate,
      arrival,
      returnDate,
      departure
    } = this.state;

    const { edit } = this.props;

    const routeList = [
      {
        heading: "DATE",
        placeholder: "Tap here to select departure date",
        onChangeDate: (date: Date) =>
          this.setState({
            departureDate: moment(date)
              .format("YYYY-MM-DD")
              .toString()
          }),
        value: this.state.departureDate
          ? moment(this.state.departureDate)
              .format("dddd, DD MMM YYYY")
              .toString()
          : null
      },
      {
        heading: "RETURN DATE",
        placeholder: "Tap here to select return date",
        onChangeDate: (date: Date) =>
          this.setState({
            returnDate: moment(date)
              .format("YYYY-MM-DD")
              .toString()
          }),
        value: this.state.returnDate
          ? moment(this.state.returnDate)
              .format("dddd, DD MMM YYYY")
              .toString()
          : null
      }
    ];

    const flightList = [
      {
        heading: "AIRLINE",
        placeholder: "Eg. Emirates Airlines",
        onChange: (airline: string) => this.setState({ airline }),
        value: airline
      },
      {
        heading: "FLIGHT NUMBER",
        placeholder: "Eg. 'EK 154'",
        onChange: (flightNumber: string) =>
          this.setState({ flightNumber: flightNumber.toLocaleUpperCase() }),
        value: flightNumber
      }
    ];

    const airports = [
      {
        heading: "DEPARTURE",
        placeholder: "Eg. Mumbai International Airport",
        selector: this.onDepartureSelect,
        airport: this.state.departure
      },
      {
        heading: "ARRIVAL",
        placeholder: "Eg. Heathrow International Airport",
        selector: this.onArrivalSelect,
        airport: this.state.arrival
      }
    ];

    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={-250}
        behavior="position"
        style={styles.container}
      >
        <View style={styles.subContainer}>
          <Header heading={HEADER.REQUEST_FEED} />
          <View style={styles.body}>
            <View style={styles.bodyHeader}>
              <TouchableOpacity
                disabled={!rfStatus}
                activeOpacity={1}
                style={[
                  styles.bodyHeaderButton,
                  { borderTopLeftRadius: 5, opacity: rfStatus ? 0.2 : 1 }
                ]}
                onPress={this.changeMode}
              >
                <Text style={styles.bodyHeaderButtonText}>BY ROUTE</Text>
              </TouchableOpacity>
              {/* TODO: Uncomment and add integrate the related API for adding the trips by Route*/}
              {/* <TouchableOpacity
                disabled={rfStatus}
                activeOpacity={1}
                style={[
                  styles.bodyHeaderButton,
                  { opacity: !rfStatus ? 0.2 : 1, borderTopRightRadius: 5 }
                ]}
                onPress={this.changeMode}
              >
                <Text style={styles.bodyHeaderButtonText}>BY FLIGHT</Text>
              </TouchableOpacity> */}
            </View>

            {rfStatus ? (
              <View style={styles.flexStart}>
                {flightList.map(element => {
                  return (
                    <View key={element.heading}>
                      <Text style={styles.subBodyViewText}>
                        {element.heading}
                      </Text>
                      <TextInput
                        onChangeText={element.onChange}
                        value={element.value}
                        autoCapitalize={
                          element.heading === "FLIGHT NUMBER"
                            ? "characters"
                            : "none"
                        }
                        style={styles.destinationInput}
                        placeholder={element.placeholder}
                      />
                    </View>
                  );
                })}
                <Text style={styles.subBodyViewText}>FLIGHT DATE</Text>
                <DateTimeModal
                  mode="date"
                  date={
                    flightDate
                      ? new Date(flightDate)
                      : new Date(moment().toString())
                  }
                  onDateChange={flightDate =>
                    this.setState({
                      flightDate: moment(flightDate)
                        .format("dddd, DD MMM YYYY")
                        .toString()
                    })
                  }
                >
                  <View style={styles.destinationInput}>
                    <Text style={{ color: flightDate ? "black" : "#bbb" }}>
                      {flightDate || "Tap here to select flight date"}
                    </Text>
                  </View>
                </DateTimeModal>
              </View>
            ) : (
              <>
                <Query<QueryResult>
                  query={SEARCH_AIRPORTS_QUERY}
                  variables={{
                    keyword: query
                  }}
                >
                  {({ loading, data, error }) => {
                    return (
                      <>
                        {airports.map(element => {
                          return (
                            <View key={element.heading}>
                              <Text style={styles.subBodyViewText}>
                                {element.heading}
                              </Text>
                              <Search<Airport>
                                key={element.heading}
                                loading={loading}
                                data={this.airportData(data)}
                                keyExtractor={this.keyExtractor}
                                query={query}
                                error={error}
                                updateSearchQuery={this.setSearchQuery}
                                onListItemSelect={element.selector}
                                dataRenderer={this.dataRenderer}
                                iconType={IconType.ION_ICONS}
                                iconName="ios-airplane"
                                placeholder="Enter an airport..."
                              >
                                <View style={styles.destinationInputView}>
                                  <Text
                                    style={{
                                      ...styles.subBodyViewText,
                                      color:
                                        element.airport &&
                                        this.dataRenderer(element.airport)
                                          ? "black"
                                          : "#bbb"
                                    }}
                                  >
                                    {this.dataRenderer(element.airport)}
                                  </Text>
                                </View>
                              </Search>
                            </View>
                          );
                        })}
                      </>
                    );
                  }}
                </Query>
                {routeList.map((element, index) => {
                  if (roundTrip || index < 1)
                    return (
                      <View key={element.heading}>
                        <Text style={styles.subBodyViewText}>
                          {element.heading}
                        </Text>
                        <DateTimeModal
                          mode="date"
                          date={new Date(element.value || moment().toString())}
                          onDateChange={element.onChangeDate}
                        >
                          <View style={styles.destinationInput}>
                            <Text
                              style={{
                                color: element.value ? "black" : "#bbb"
                              }}
                            >
                              {element.value || element.placeholder}
                            </Text>
                          </View>
                        </DateTimeModal>
                      </View>
                    );
                })}
              </>
            )}
            <AlertModal
              travel
              color={colors.BUTTON.BG_PRIMARY}
              modalStatus={modalVisible}
              onPress={this.onSubmitModal}
              buttonText={TRIP.BUTTON}
              heading={edit ? TRIP.EDITED : TRIP.ADDED}
              subHeading={TRIP.DESCRIPTION}
            />
            <View
              style={[styles.bottomView, { marginTop: roundTrip ? 20 : 95 }]}
            >
              <Mutation<MutationResult> mutation={ADD_TRIP}>
                {addTrip => {
                  const addTripMutation = () => {
                    if (departure && arrival) {
                      this.setState({ loading: true });
                      addTrip({
                        variables: {
                          tripInput: {
                            trip: {
                              departureAirportId: departure.id,
                              arrivalAirportId: arrival.id,
                              departureDate
                            }
                          }
                        }
                      })
                        .then(() => {
                          if (roundTrip)
                            addTrip({
                              variables: {
                                tripInput: {
                                  trip: {
                                    departureAirportId: arrival.id,
                                    arrivalAirportId: departure.id,
                                    returnDate
                                  }
                                }
                              }
                            });
                        })
                        .then(this.onMutationSuccess)
                        .catch(this.onMutationFail);
                    }
                  };

                  const editTripMutation = () =>
                    this.setState({ modalVisible: true });

                  if (loading)
                    return <ActivityIndicator color={colors.SEA_BLUE} />;
                  return (
                    <TouchableOpacity
                      onPress={edit ? editTripMutation : addTripMutation}
                      disabled={!this.disabled()}
                      style={
                        this.disabled()
                          ? styles.addTripButtonEnabled
                          : styles.addTripButton
                      }
                    >
                      <Text
                        style={
                          this.disabled()
                            ? styles.addTripButtonTextEnabled
                            : styles.addTripButtonText
                        }
                      >
                        {`${edit ? "EDIT" : "ADD"} TRIP`}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              </Mutation>
              {!rfStatus ? (
                <View style={styles.switchView}>
                  <Switch
                    style={styles.switchView}
                    value={roundTrip}
                    onValueChange={this.onSwitch}
                  />
                  <Text style={styles.roundTripText}>Round Trip</Text>
                </View>
              ) : null}
            </View>
          </View>
          <Toast ref={this.myRef} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default React.memo(AddTrip);
