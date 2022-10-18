import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
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
import * as ScreenOrientation from "expo-screen-orientation";
import { AntDesign } from "@expo/vector-icons";
import { FloatingAction } from "react-native-floating-action";

import optionsPng from "../assets/logos/options.png";
import { Audio } from "expo-av";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default Home = (props) => {
  const { navigation } = props;
  const { Email_, isLogIn, setIsLogIn, lenguage, setLenguage } = useLogin();
  const idioma = AppLenguage[lenguage];
  const [orientation, setOrientation] = useState(
    ScreenOrientation.Orientation.PORTRAIT_UP
  );
  const [loading, setLoading] = useState(false);
  const [showItems, setShowItems] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [changeLanguage, setChangeLanguage] = useState(false);
  const [tema, setTema] = useState(slides[1]);
  const [sound, setSound] = useState(null);
  const [btnTemaSeleccionado, setBtnTemaSeleccionado] = useState(1);
  const [btnIdiomaSeleccionado, setBtnIdiomaSeleccionado] = useState(lenguage); //0 español 1 ingles
  const [tipo, setTipo] = useState(0);
  const [botonDesplegable, setBotonDesplegable] = useState(false);

  const changetema = (value) => {
    setTema(value);
  };

  useEffect(() => {
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
          setShowItems(false);
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
            borderRadius: 0,
            overflow: "hidden",
            //  opacity: idTema == btnTemaSeleccionado ? 1 : 0.4,
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
  const renderScreenHorizontal = () => {
    return (
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
        <View style={{ flex: 0.2, width: "100%", height: "100%" }}>
          {btnIdioma(0, idioma.home.btnEsp, [
            styles.idioma1H,
            { backgroundColor: lenguage == 0 ? "yellow" : ColorsPPS.morado },
          ])}
          {btnIdioma(1, idioma.home.btnIng, [
            styles.idioma2H,
            { backgroundColor: lenguage == 1 ? "yellow" : ColorsPPS.morado },
          ])}
          {btnIdioma(2, idioma.home.btnPor, [
            styles.idioma3H,
            { backgroundColor: lenguage == 2 ? "yellow" : ColorsPPS.morado },
          ])}
          <TouchableOpacity
            style={{
              width: WIDTH * 0.25,
              height: HEIGHT * 0.06,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              borderWidth: 0,
              position: "absolute",
              top: HEIGHT * 0.06,
              right: 5,
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
        </View>
        <View style={{ flex: 0.75, width: "100%", height: "100%" }}>
          {/* PRIMERA FILA */}
          <View
            style={{
              width: "100%",
              flex: 0.333,
              justifyContent: "space-around",
              alignContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "40%",
                height: "100%",
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
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "40%",
                height: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  actionPressImg(1);
                }}
              >
                <Image
                  source={tema.images[1]}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* SEGUNDA FILA */}
          <View
            style={{
              width: "100%",
              flex: 0.333,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "40%",
                height: "100%",
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
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* TERCER FILA */}
          <View
            style={{
              width: "100%",
              flex: 0.333,
              justifyContent: "space-around",
              alignContent: "space-around",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "40%",
                height: "100%",
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
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "40%",
                height: "100%",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  actionPressImg(4);
                }}
              >
                <Image
                  source={tema.images[4]}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.05, width: "100%", height: "100%" }}></View>
        <FloatingAction
          floatingIcon={renderImg(tipo)}
          actions={actions}
          //position={"center"}
          color={"yellow"}
          onPressItem={(name) => {
            if (name === "animals") {
              setTipo(0);
              setTema(slides[1]);
            } else if (name === "colors") {
              setTipo(2);
              setTema(slides[2]);
            } else if (name === "numbers") {
              setTipo(1);
              setTema(slides[0]);
            }
            console.log(`selected button: ${name}`);
          }}
          iconHeight={40}
          iconWidth={40}
          buttonSize={60}
        />
      </ImageBackground>
    );
  };
  if (orientation == 4) {
    return loading ? (
      <LoadingScreen message={"Cerrando Sesión"} />
    ) : (
      renderScreenHorizontal()
    );
  }

  const actions = [
    {
      text: "",
      icon: require("../assets/iconos/animals.png"),
      name: "animals",
      position: 2,
      color: ColorsPPS.morado,
    },
    {
      text: "",
      icon: require("../assets/iconos/colors.png"),
      name: "colors",
      position: 1,
      color: ColorsPPS.morado,
    },
    {
      text: "",
      icon: require("../assets/iconos/numbers.png"),
      name: "numbers",
      position: 3,
      color: ColorsPPS.morado,
    },
  ];

  return loading ? (
    <LoadingScreen message={"Cerrando Sesión"} />
  ) : (
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
      <View style={{ width: "100%", flex: 0.15, borderWidth: 0 }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
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

        <TouchableOpacity
          style={{
            width: WIDTH * 0.15,
            //height: HEIGHT * 0.04,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",

            position: "absolute",
            top: HEIGHT * 0.065 + 40,
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
      </View>
      <View style={{ width: "100%", flex: 0.8, borderWidth: 0 }}>
        <View
          style={{
            alignSelf: "center",
            width: "100%",
          }}
        >
          {/* PRIMERA FILA */}
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
              padding: 0,
              borderWidth: 0,
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
                  width: 150,
                  height: Dimensions.get("window").height * 0.25,
                  resizeMode: "contain",
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
                  width: 150,
                  height: Dimensions.get("window").height * 0.25,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              padding: 0,
              borderWidth: 0,
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
                  width: 150,
                  height: Dimensions.get("window").height * 0.25,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              alignContent: "center",
              alignItems: "center",
              padding: 0,
              borderWidth: 0,
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
                  width: 150,
                  height: Dimensions.get("window").height * 0.25,
                  resizeMode: "contain",
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
                  width: 150,
                  height: Dimensions.get("window").height * 0.25,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          flex: 0.05,
          justifyContent: botonDesplegable ? "flex-start" : "center",
        }}
      ></View>
      <FloatingAction
        floatingIcon={renderImg(tipo)}
        actions={actions}
        //position={"center"}
        color={"yellow"}
        onPressItem={(name) => {
          if (name === "animals") {
            setTipo(0);
            setTema(slides[1]);
          } else if (name === "colors") {
            setTipo(2);
            setTema(slides[2]);
          } else if (name === "numbers") {
            setTipo(1);
            setTema(slides[0]);
          }
          console.log(`selected button: ${name}`);
        }}
        iconHeight={40}
        iconWidth={40}
        buttonSize={60}
      />
    </ImageBackground>
  );
};

/*

{showItems && (
          <View style={{ flex: 1 }}>
            {btnTema(
              btnColor,
              idioma.home.btnTemaColores,
              "white",
              styles.btn2,
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
              styles.btn2,
              slides[0],
              0
            )}
          </View>
        )}
        {!showItems && (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View
              style={{
                width: "50%",
                height: Dimensions.get("window").height * 0.2,
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setShowItems(true);
                }}
              >
                <Image
                  source={optionsPng}
                  style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: "contain",
                    borderWidth: 0,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
*/

const styles = StyleSheet.create({
  btn1: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.065,
    borderRadius: 0,
    alignSelf: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
  },
  btn2: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.065,
    borderRadius: 0,

    alignSelf: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 10,
      height: 100,
    },
    shadowOpacity: 0.45,
    shadowRadius: 0,
  },
  btn2H: {
    width: "100%",
    flex: 0.333,
    borderRadius: 20,
  },
  btn3H: {
    width: "100%",
    flex: 0.333,
    borderRadius: 20,
  },
  btn3: {
    width: WIDTH * 0.9,
    height: HEIGHT * 0.065,
    borderRadius: 0,

    //alignSelf: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,

    borderWidth: 1,
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
  idioma1H: {
    width: WIDTH * 0.5,
    height: HEIGHT * 0.05,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 120,
    backgroundColor: ColorsPPS.morado,
    position: "absolute",
    top: 10,
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
    top: 30,
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
  idioma2H: {
    width: WIDTH * 0.5,
    height: HEIGHT * 0.05,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 120,
    backgroundColor: ColorsPPS.morado,
    position: "absolute",
    top: 10,
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
    borderWidth: 0,
  },
  idioma3H: {
    width: WIDTH * 0.5,
    height: HEIGHT * 0.05,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 120,
    backgroundColor: ColorsPPS.morado,
    position: "absolute",
    top: 10,
    right: 20,
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 0,
  },
});
