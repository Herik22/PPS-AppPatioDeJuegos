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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLogin } from "../context/LoginProvider";
import ModalLogin from "../components/login/modalLogin";
import ColorsPPS from "../utils/ColorsPPS";
import LoadingScreen from "../utils/loadingScreen";

const Login = (props) => {
  const { setisFinishSplash, setIsLogIn } = useLogin();
  const { navigation } = props;
  const { setEmail_ } = useLogin();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Traigo los datos 3 segundos despues
    GuardarData();

    setTimeout(() => {
      TraerData();
    }, 3000);
  }, []);

  const GuardarData = async () => {
    // guardo la informacion en el asyn mientras se carga la aplicacion
    try {
      console.log("guardando user");
      await AsyncStorage.setItem(
        "Usuarios",
        JSON.stringify([
          {
            id: 1,
            correo: "admin@admin.com",
            clave: 1111,
            perfil: "admin",
            sexo: "femenino",
          },
          {
            id: 2,
            correo: "invitado@invitado.com",
            clave: 2222,
            perfil: "invitado",
            sexo: "femenino",
          },
          {
            id: 3,
            correo: "usuario@usuario.com",
            clave: 3333,
            perfil: "usuario",
            sexo: "masculino",
          },
          {
            id: 4,
            correo: "anonimo@anonimo.com",
            clave: 4444,
            perfil: "usuario",
            sexo: "masculino",
          },
          {
            id: 5,
            correo: "tester@tester.com",
            clave: 5555,
            perfil: "tester",
            sexo: "femenino",
          },
          {
            id: 420,
            correo: "invitado@gmail.com",
            clave: "invitado1234",
            perfil: "usuario",
            sexo: "masculino",
          },
          {
            id: 421,
            correo: "invitado1@gmail.com",
            clave: "invitado1234",
            perfil: "usuario",
            sexo: "masculino",
          },
          {
            id: 422,
            correo: "invitado2@gmail.com",
            clave: "invitado1234",
            perfil: "usuario",
            sexo: "masculino",
          },
          {
            id: 423,
            correo: "invitado3@gmail.com",
            clave: "invitado1234",
            perfil: "usuario",
            sexo: "masculino",
          },
        ])
      );
    } catch (e) {
      console.log("error guardando en el storage" + e);
    }
  };
  const TraerData = async () => {
    try {
      const value = await AsyncStorage.getItem("Usuarios");
      if (value !== null) {
        setUsers(value);
        console.log("ya cargaron los usuarios!!!");
      }
    } catch (e) {
      console.log("error TRAYENDO en el storage" + e);
    }
  };
  const validarCredencial = (values) => {
    let retorno = false;
    if (users.length > 0) {
      JSON.parse(users).forEach((element) => {
        if (
          element.correo == values.email &&
          element.clave == values.password
        ) {
          retorno = true;
        }
      });
    } else {
      console.log("LOS USUARIOS ESTAN VACIOS!!!");
    }

    return retorno;
  };
  const onPressLogIn = (values) => {
    //console.log(values)
    if (validarCredencial(values)) {
      setLoading(true);
      setTimeout(() => {
        setEmail_(values.email);
        setIsLogIn(true);
      }, 2000);
    } else {
      setShowModal(true);
    }
    setEmail("");
    setPassword("");
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
      setEmail_(`invitado${numero}@gmail.com`);
      setEmail(`invitado${numero}@gmail.com`);
      setPassword("invitado1234");
      setLoading(true);
      setTimeout(() => {
        setIsLogIn(true);
        setEmail("");
        setPassword("");
        setLoading(false);
      }, 2000);
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
          onPressLogIn(values);
          actions.resetForm();
        }}
      >
        {(formikprops) => (
          <View style={{ margin: 10 }}>
            <Input
              label="Correo Electrónico"
              labelStyle={{ color: ColorsPPS.azul }}
              style={{ width: "100%", padding: 10 }}
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
  /*
<LoadingScreen message={'Trayendo tus productos...'} />
*/
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
    fontSize: 15,
  },
});
export default Login;
