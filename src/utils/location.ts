/* eslint-disable import/prefer-default-export */

import Permissions from "react-native-permissions";
import Geolocation from "react-native-geolocation-service";
import { Alert } from "react-native";

interface GetLocationCoordinates {
  data?: {
    latitude: number;
    longitude: number;
  };
  error?: Error;
}

interface GetLocationCoordinatesOptions {
  silent?: boolean;
}

const getCurrentPosition = (): Promise<GetLocationCoordinates> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        if (position.coords.latitude && position.coords.longitude) {
          resolve({
            data: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          });
        }
        reject(new Error("Could not fetch your location"));
      },
      error => {
        reject(new Error(error.message));
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  });
};

export const getLocationCoordinates = async (
  options?: GetLocationCoordinatesOptions
): Promise<GetLocationCoordinates> => {
  let locationPermissionStatus = await Permissions.check("location");
  switch (locationPermissionStatus) {
    case "authorized":
      try {
        const currentPosition = await getCurrentPosition();
        if (currentPosition.data) {
          return { data: currentPosition.data };
        }
      } catch (error) {
        return { error };
      }
      break;
    case "denied":
      if (!options || !options.silent) {
        const canOpenSettings = await Permissions.canOpenSettings();
        Alert.alert(
          "You have denied the location permission",
          "Your location will help us to show you information relevant to you and improve your experience of using Airbük. Please allow the location permission from settings.",
          [
            {
              text: "Dismiss",
              style: "destructive"
            },
            canOpenSettings
              ? { text: "Open Settings", onPress: Permissions.openSettings }
              : { text: "Okay" }
          ],
          { cancelable: false }
        );
      }
      break;
    case "restricted":
      if (!options || !options.silent) {
        Alert.alert(
          "Cannot access location from your device",
          "We could not get your location either because you have denied location access, your device does not support it or it has been blocked by parental controls.",
          [
            {
              text: "Dismiss",
              style: "cancel"
            }
          ]
        );
      }
      break;
    case "undetermined":
      if (!options || !options.silent) {
        locationPermissionStatus = await Permissions.request("location", {
          type: "whenInUse",
          rationale: {
            title: "Airbük needs to access your location",
            message:
              "Your location will help us to show you information relevant to you and improve your experience of using Airbük."
          }
        });
        return getLocationCoordinates(options);
      }
      break;
    default:
      return {};
  }
  return {};
};
