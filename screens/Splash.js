import { Text, View, Image, Dimensions, Animated, Easing } from "react-native";
import React, { useEffect, useState } from "react";
import { useLogin } from "../context/LoginProvider";
import splash_ from "../assets/splash/animated2.json";

export default Splash = (props) => {
  const { navigation } = props;
  const { setisFinishSplash, setIsLogIn } = useLogin();

  let spinValue = new Animated.Value(0);

  //ejemplo 2
  let animatedValue = new Animated.Value(0);
  const animate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {
      animate();
    });
  };
  const marginLeft = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 250],
  });
  const opacity = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0],
  });
  const movingMargin = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 50, 0],
  });
  const textSize = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [28, 42, 28],
  });
  const rotateX = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "360deg", "0deg"],
  });
  /* ********* */

  useEffect(() => {
    //

    girar();
    animate();
    setTimeout(() => {
      navigation.navigate("Login");
    }, 4000);
  }, []);

  const girar = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start(() => {
      girar();
    });
  };
  const rotateData = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "#4F56FF", //"#68BDED",
      }}
    >
      <View style={{ flex: 0.3, justifyContent: "center" }}>
        <Animated.Text
          style={{
            fontSize: textSize,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          Herik Arismendy
        </Animated.Text>
        <Animated.Text
          style={{
            fontSize: textSize,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          División 4a{" "}
        </Animated.Text>
      </View>
      <Animated.View
        style={{
          width: "100%",
          borderWidth: 0,
          height: 10,
          flex: 0.7,
          justifyContent: "center",
          marginLeft: marginLeft,
          transform: [{ rotate: rotateX }],
        }}
      >
        <Image
          source={require("../assets/logos/iconlogo.png")}
          style={{
            width: "50%",
            height: "50%",
            resizeMode: "contain",
          }}
        />
      </Animated.View>
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
