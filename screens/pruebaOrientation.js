import { Text, View } from "react-native";
import React, { Component, useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

export default PruebaOrientation = () => {
  const [orientation, setOrientation] = useState(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );

  useEffect(() => {
    // set initial orientation
    ScreenOrientation.getOrientationAsync().then((info) => {
      setOrientation(info.orientation);
    });

    // subscribe to future changes
    const subscription = ScreenOrientation.addOrientationChangeListener(
      (evt) => {
        console.log("info oyemte ", evt.orientationInfo.orientation);
        //1 VERTICAL
        // 4 HORIZONTAL
        setOrientation(evt.orientationInfo.orientation);
      }
    );

    // return a clean up function to unsubscribe from notifications
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, []);

  if (orientation === 4) {
    return (
      <View style={{ flex: 1 }}>
        <Text> PANTALLA EN HORIZONTAAAL </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>PANTALLA EN VERTICAAAAL</Text>
    </View>
  );
};
