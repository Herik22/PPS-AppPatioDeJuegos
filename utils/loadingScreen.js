import React from "react";
import {
  ActivityIndicator,
  View,
  Text,
  Dimensions,
  StatusBar,
  ImageBackground,
  StyleSheet,
} from "react-native";
import fondo from "../assets/fondos/fondocarga.png";
//import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window");

const LoadingScreen = ({ message }) => {
  return (
    <ImageBackground source={fondo} resizeMode="cover" style={styles.imagef}>
      <View style={{ marginTop: 60 }}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <ActivityIndicator size="large" color="black" />
        <Text
          style={{
            color: "black",
            marginTop: height * 0.024,
            fontSize: 18,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {message}
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imagef: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
export default LoadingScreen;
