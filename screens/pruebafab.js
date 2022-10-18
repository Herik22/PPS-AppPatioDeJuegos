import { Text, View } from "react-native";
import React, { Component, useState } from "react";
import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "",
    icon: require("../assets/iconos/animals.png"),
    name: "animals",
    position: 2,
  },
  {
    text: "",
    icon: require("../assets/iconos/colors.png"),
    name: "colors",
    position: 1,
  },
  {
    text: "",
    icon: require("../assets/iconos/numbers.png"),
    name: "numbers",
    position: 3,
  },
];

const renderImg = (type) => {
  switch (type) {
    case 0: //animales
      return require("../assets/iconos/animals.png");
    case 1: // numeros
      return require("../assets/iconos/numbers.png");
    case 2: // numeros
      return require("../assets/iconos/colors.png");
  }
};

const Pruebafab = () => {
  const [tipo, setTipo] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>pruebafab</Text>
      <FloatingAction
        floatingIcon={renderImg(tipo)}
        actions={actions}
        //position={"center"}
        onPressItem={(name) => {
          if (name === "animals") {
            setTipo(0);
          } else if (name === "colors") {
            setTipo(2);
          } else if (name === "numbers") {
            setTipo(1);
          }
          console.log(`selected button: ${name}`);
        }}
        iconHeight={40}
        iconWidth={40}

        //buttonSize={40}
      />
    </View>
  );
};

export default Pruebafab;
