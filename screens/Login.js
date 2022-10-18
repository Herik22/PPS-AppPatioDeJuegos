import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Input } from "@rneui/base";
import { Formik } from "formik";
import * as yup from "yup";
import { useLogin } from "../context/LoginProvider";
import ModalLogin from "../components/login/modalLogin";
import ColorsPPS from "../utils/ColorsPPS";
import LoadingScreen from "../utils/loadingScreen";
import Sizes_ from "../utils/Sizes";
import { authentication } from "../firebase-config";

const Login = (props) => {
  const { setisFinishSplash, setIsLogIn, setEmail_ } = useLogin();
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {}, []);

  const login = (values, actions = false) => {
    try {
      setLoading(true);
      authentication
        .signInWithEmailAndPassword(values.email, values.password)
        .then((_userCredentials) => {
          actions && actions.resetForm();
          setLoading(false);
          setIsLogIn(true);
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              Alert.alert("¡Ops!", "¡Usuario y/o Contraseña incorrectos!");
              break;
            case "auth/wrong-password":
              Alert.alert("¡Ops!", "¡Usuario y/o Contraseña incorrectos!");
              break;
          }
        });
    } catch (error) {
      setLoading(false);
      alert(error);
    }
  };
  const btnLogin = (bgColor, color, txtName, action) => {
    return (
      <TouchableOpacity
        style={{
          height: "40%",
          width: "80%",
          backgroundColor: bgColor,
          alignSelf: "center",
          justifyContent: "center",
          margin: 10,
          borderRadius: 20,
        }}
        onPress={() => {
          action();
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: color,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {" "}
          {txtName}{" "}
        </Text>
      </TouchableOpacity>
    );
  };
  const btnInvited = (number, txtName) => {
    const onpressInvited = (numero) => {
      login({ email: `invitado${numero}@gmail.com`, password: "123456" });
    };
    return (
      <TouchableOpacity
        style={{
          height: "40%",
          width: "30%",
          backgroundColor: "white",
          alignSelf: "center",
          justifyContent: "center",
          margin: 10,
          borderRadius: 10,
          borderColor: ColorsPPS.azul,
          borderWidth: 1,
        }}
        onPress={() => {
          onpressInvited(number);
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: ColorsPPS.azul,
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          {" "}
          {txtName}{" "}
        </Text>
      </TouchableOpacity>
    );
  };

  const LoginValidation = yup.object({
    email: yup
      .string()
      .required("Ingresa tu correo electrónico")
      .email("El formato el email es invalido"),

    password: yup.string().required("Ingresa tu contraseña"),
  });

  const formLogin = () => {
    return (
      <Formik
        initialValues={{ email: email, password: "" }}
        validationSchema={LoginValidation}
        onSubmit={(values, actions) => {
          //onPressLogIn(values);
          login(values, actions);
          actions.resetForm();
        }}
      >
        {(formikprops) => (
          <View style={{ margin: 10 }}>
            <Input
              label="Correo Electrónico"
              labelStyle={{ color: ColorsPPS.azul }}
              style={{ width: "100%", padding: 10 }}
              errorStyle={{ height: 0 }}
              inputContainerStyle={{ borderColor: ColorsPPS.azul }}
              leftIcon={
                <Ionicons
                  name="people-outline"
                  size={20}
                  color={ColorsPPS.azul}
                />
              }
              onChangeText={formikprops.handleChange("email")}
              onChange={(event) => setEmail(event.nativeEvent.text)}
              value={email}
              onBlur={formikprops.handleBlur("email")}
              defaultValue={email}
              name="email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {formikprops.touched.email && (
              <View style={styles.errorTextContainer}>
                <Text style={[styles.errorText]}>
                  {formikprops.touched.email && formikprops.errors.email}
                </Text>
              </View>
            )}
            <Input
              label="Contraseña"
              labelStyle={{ color: ColorsPPS.azul }}
              containerStyle={{}}
              inputContainerStyle={{
                color: ColorsPPS.azul,
                borderColor: ColorsPPS.azul,
              }}
              errorStyle={{ height: 0 }}
              style={{ width: "100%", padding: 10 }}
              leftIcon={
                <Ionicons name="key" size={20} color={ColorsPPS.azul} />
              }
              onChangeText={formikprops.handleChange("password")}
              onChange={(event) => setPassword(event.nativeEvent.text)}
              value={password}
              onBlur={formikprops.handleBlur("password")}
              defaultValue={password}
              name="password"
              secureTextEntry={hidePassword}
              rightIcon={
                <Ionicons
                  name={hidePassword ? "eye" : "eye-off"}
                  size={20}
                  color={ColorsPPS.azul}
                  onPress={() => {
                    setHidePassword(!hidePassword);
                  }}
                />
              }
            />
            {formikprops.touched.password && (
              <View style={styles.errorTextContainer}>
                <Text style={[styles.errorText]}>
                  {formikprops.touched.password && formikprops.errors.password}
                </Text>
              </View>
            )}

            <View
              style={{
                height: Dimensions.get("window").height * 0.15,
                width: "100%",
                justifyContent: "center",
              }}
            >
              {btnLogin(
                ColorsPPS.azul,
                "white",
                "Entrar",
                formikprops.handleSubmit
              )}
            </View>
          </View>
        )}
      </Formik>
    );
  };

  return loading ? (
    <LoadingScreen message={"Iniciando Sesión ... "} />
  ) : (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "white" }}
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View
        style={{
          flex: 0.4,
          borderWidth: 0,
          height: "100%",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/logos/iconlogo.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View
        style={{
          marginVertical: 10,
          flex: 0.1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: ColorsPPS.azul,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {" "}
          INICIAR SESIÓN{" "}
        </Text>
      </View>

      <View style={{ flex: 0.6, width: "100%", padding: 20 }}>
        {formLogin()}
      </View>

      <View
        style={{
          flex: 0.2,
          width: "100%",
          justifyContent: "space-around",
          flexDirection: "row",
          padding: 5,
        }}
      >
        {btnInvited(1, "Invitado 1")}
        {btnInvited(2, "Invitado 2")}
        {btnInvited(3, "Invitado 3")}
      </View>
      {
        <ModalLogin
          showModal={showModal}
          setShowModal={setShowModal}
          message={"Ups,El usuario no se encuentra registrado."}
        />
      }
    </View>
  );
};
const styles = StyleSheet.create({
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: Sizes_.small,
  },
  errorTextContainer: {
    borderWidth: 0,
    alignItems: "flex-start",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
export default Login;
