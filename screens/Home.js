import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Animated,
  FlatList,
  Image,
} from "react-native";
import React, { Component, useState, useEffect, useRef } from "react";
import { useLogin } from "../context/LoginProvider";
import ColorsPPS from "../utils/ColorsPPS";
import LoadingScreen from "../utils/loadingScreen";
import AppLenguage from "../utils/TextosApp";
import btnColor from "../assets/botonesHome/btnColores.png";
import btnNumeros from "../assets/botonesHome/btnNumeros.png";
import btnAnimales from "../assets/botonesHome/btnAnimales.png";
import slides from "../components/home/slides";
import { Entypo, FontAwesome, AntDesign } from "@expo/vector-icons";

import { Audio } from "expo-av";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default Home = (props) => {
  const { navigation } = props;
  const { Email_, isLogIn, setIsLogIn, lenguage, setLenguage } = useLogin();
  const idioma = AppLenguage[lenguage];
  const [loading, setLoading] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(false);
  const [tema, setTema] = useState(slides[1]);
  const [sound, setSound] = useState(null);
  const [btnTemaSeleccionado, setBtnTemaSeleccionado] = useState(1);
  const [btnIdiomaSeleccionado, setBtnIdiomaSeleccionado] = useState(lenguage); //0 español 1 ingles

  const changetema = (value) => {
    setTema(value);
  };
  useEffect(() => {}, [changeLanguage]);
  useEffect(() => {
    console.log("btnIdiomaSeleccionado");
    console.log(btnIdiomaSeleccionado);
  }, [tema]);
  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const btnIdioma = (language_, txtBtn, style) => {
    return (
      <TouchableOpacity
        style={style}
        onPress={() => {
          setBtnIdiomaSeleccionado(language_);
          setChangeLanguage(!changeLanguage);
          setLenguage(language_);
          setShowLanguages(!showLanguages);
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
          {txtBtn}{" "}
        </Text>
      </TouchableOpacity>
    );
  };
  const btnTema = (
    fondo,
    titulo,
    colorTitulo = "white",
    styleBtn,
    value,
    idTema
  ) => {
    return (
      <TouchableOpacity
        style={styleBtn}
        onPress={() => {
          setBtnTemaSeleccionado(idTema);
          changetema(value);
        }}
      >
        <ImageBackground
          source={fondo}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            borderRadius: 20,
            overflow: "hidden",
            opacity: idTema == btnTemaSeleccionado ? 1 : 0.4,
          }}
        ></ImageBackground>
      </TouchableOpacity>
    );
  };

  const actionPressImg = async (numberImage) => {
    if (tema.id == 1) {
      switch (numberImage) {
        case 0:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/numeros/espaniol/1.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/ingles/1.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/portugues/1.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }

        case 1:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/numeros/espaniol/2.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/ingles/2.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/portugues/2.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
        case 2:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/numeros/espaniol/3.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/ingles/3.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/portugues/3.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
        case 3:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/numeros/espaniol/4.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/ingles/4.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/portugues/4.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
        case 4:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/numeros/espaniol/5.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/ingles/5.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/numeros/portugues/5.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
      }
    }
    if (tema.id == 2) {
      switch (numberImage) {
        case 0:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/animales/espaniol/loro.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/ingles/loro.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/portugues/loro.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }

        case 1:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/animales/espaniol/buho.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/ingles/buho.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/portugues/buho.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
        case 2:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/animales/espaniol/aguila.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/ingles/aguila.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/portugues/aguila.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
        case 3:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/animales/espaniol/pajaro.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/ingles/pajaro.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/portugues/pajaro.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
        case 4:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/animales/espaniol/ciguena.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/ingles/ciguena.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/animales/portugues/ciguena.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
      }
    }
    if (tema.id == 3) {
      switch (numberImage) {
        case 0:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/colores/espaniol/amarillo.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/ingles/amarillo.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/portugues/amarillo.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }

        case 1:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/colores/espaniol/rojo.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/ingles/rojo.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/portugues/rojo.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
        case 2:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/colores/espaniol/azul.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/ingles/azul.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/portugues/azul.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
        case 3:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/colores/espaniol/morado.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/ingles/morado.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/portugues/morado.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
        case 4:
          if (idioma.lenguage == "ESP") {
            const { sound } = await Audio.Sound.createAsync(
              require("../assets/sonidos/colores/espaniol/verde.mp3")
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "ING") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/ingles/verde.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
          if (idioma.lenguage == "POR") {
            const { sound } = await Audio.Sound.createAsync(
              require(`../assets/sonidos/colores/portugues/verde.mp3`)
            );
            setSound(sound);
            await sound.playAsync();
            break;
          }
      }
    }
  };
  return loading ? (
    <LoadingScreen message={"Cerrando Sesión"} />
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: ColorsPPS.azul,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ImageBackground
        source={tema.bgImage}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        {/* CAMBIO IDIOMA */}

        <>
          {btnIdioma(0, idioma.home.btnEsp, [
            styles.idioma1,
            { backgroundColor: lenguage == 0 ? "yellow" : ColorsPPS.morado },
          ])}
          {btnIdioma(1, idioma.home.btnIng, [
            styles.idioma2,
            { backgroundColor: lenguage == 1 ? "yellow" : ColorsPPS.morado },
          ])}
          {btnIdioma(2, idioma.home.btnPor, [
            styles.idioma3,
            { backgroundColor: lenguage == 2 ? "yellow" : ColorsPPS.morado },
          ])}
        </>

        <TouchableOpacity
          style={{
            width: WIDTH * 0.15,
            height: HEIGHT * 0.06,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            alignContent: "center",
            borderRadius: 120,
            backgroundColor: ColorsPPS.morado,
            position: "absolute",
            top: 90,
            right: 5,
            shadowColor: "white",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.45,
            shadowRadius: 4,
            elevation: 5,
          }}
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setIsLogIn(false);
            }, 2000);
          }}
        >
          <AntDesign name="logout" size={30} color={"white"} />
        </TouchableOpacity>

        <View
          style={{
            alignSelf: "center",
            width: "100%",
            height: 500,
            padding: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 150,
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
              padding: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                actionPressImg(0);
              }}
            >
              <Image
                source={tema.images[0]}
                style={{
                  width: Dimensions.get("window").width * 0.3,
                  height: Dimensions.get("window").height * 0.2,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                actionPressImg(1);
              }}
            >
              <Image
                source={tema.images[1]}
                style={{
                  width: Dimensions.get("window").width * 0.3,
                  height: Dimensions.get("window").height * 0.2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 150,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                actionPressImg(2);
              }}
            >
              <Image
                source={tema.images[2]}
                style={{
                  width: Dimensions.get("window").width * 0.3,
                  height: Dimensions.get("window").height * 0.2,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 150,
              justifyContent: "space-between",
              alignContent: "flex-start",
              alignItems: "flex-end",
              paddingBottom: 40,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                actionPressImg(3);
              }}
            >
              <Image
                source={tema.images[3]}
                style={{
                  width: Dimensions.get("window").width * 0.3,
                  height: Dimensions.get("window").height * 0.2,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                actionPressImg(4);
              }}
            >
              <Image
                source={tema.images[4]}
                style={{
                  width: Dimensions.get("window").width * 0.3,
                  height: Dimensions.get("window").height * 0.2,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Botones */}

        {btnTema(
          btnColor,
          idioma.home.btnTemaColores,
          "white",
          styles.btn3,
          slides[2],
          2
        )}
        {btnTema(
          btnAnimales,
          idioma.home.btnTemaAnimales,
          "black",
          styles.btn2,
          slides[1],
          1
        )}
        {btnTema(
          btnNumeros,
          idioma.home.btnTemaNumeros,
          "white",
          {
            width: WIDTH * 0.9,
            height: HEIGHT * 0.065,
            borderRadius: 20,
            overflow: "hidden",
            position: "absolute",
            bottom: HEIGHT * 0.21,
            alignSelf: "center",
            shadowColor: "white",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.45,
            shadowRadius: 4,
            elevation: 5,
          },
          slides[0],
          0
        )}
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  btn1: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.065,
    borderRadius: 20,
    overflow: "hidden",
    position: "absolute",
    bottom: HEIGHT * 0.21,
    alignSelf: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  btn2: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.065,
    borderRadius: 20,
    overflow: "hidden",
    position: "absolute",
    bottom: HEIGHT * 0.11,
    alignSelf: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 10,
      height: 100,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  btn3: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.065,
    borderRadius: 20,
    overflow: "hidden",
    position: "absolute",
    bottom: HEIGHT * 0.01,
    alignSelf: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  idioma1: {
    width: WIDTH * 0.28,
    height: HEIGHT * 0.05,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 120,
    backgroundColor: ColorsPPS.morado,
    position: "absolute",
    top: 40,
    left: 20,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  idioma1Bis: {
    opacity: 0.05,
    width: WIDTH * 0.28,
    height: HEIGHT * 0.05,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 120,
    backgroundColor: ColorsPPS.morado,
    position: "absolute",
    top: 40,
    left: 20,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  idioma2: {
    width: WIDTH * 0.28,
    height: HEIGHT * 0.05,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 120,
    backgroundColor: ColorsPPS.morado,
    position: "absolute",
    top: 40,
    alignSelf: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  idioma2Bis: {
    opacity: 0.5,
    width: WIDTH * 0.28,
    height: HEIGHT * 0.05,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 120,
    backgroundColor: ColorsPPS.morado,
    position: "absolute",
    top: 40,
    alignSelf: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
  idioma3: {
    width: WIDTH * 0.28,
    height: HEIGHT * 0.05,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 120,
    backgroundColor: ColorsPPS.morado,
    position: "absolute",
    top: 40,
    right: 20,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
  },
});
