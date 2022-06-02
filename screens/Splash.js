import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import React, { Component, useEffect } from "react";
import { useLogin } from "../context/LoginProvider";
import LottieView from "lottie-react-native";
import splash_ from "../assets/splash/animated2.json";

export default Splash = (props) => {
  const { navigation } = props;
  const { setisFinishSplash, setIsLogIn } = useLogin();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 3500);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#68BDED",
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          Herik Arismendy{" "}
        </Text>
        <Text
          style={{
            fontSize: 45,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          División 4a{" "}
        </Text>
      </View>
      <Image
        source={require("../assets/splash/game.gif")}
        resizeMode={"cover"}
        style={{
          width: "100%", //Dimensions.get("window").width * 0.8,
          height: Dimensions.get("window").height * 0.8,
        }}
      />
    </View>
  );

  /* <View
      style={{
        backgroundColor: "#4F56FF",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View style={{ flex: 0.6, alignSelf: "center" }}>
        <LottieView
          source={splash_}
          style={{ width: 250, height: 250 }}
          autoPlay
          loop
        />
      </View>
    </View>*/
};
