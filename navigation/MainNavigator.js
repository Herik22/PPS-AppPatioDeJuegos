import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Splash from "../screens/Splash";
import { useLogin } from "../context/LoginProvider";
import PruebaOrientation from "../screens/pruebaOrientation";
import Pruebafab from "../screens/pruebafab";

const Stack = createNativeStackNavigator();

const Init = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        component={Pruebafab}
        options={{ headerShown: false }}
        name="prueba"
      />
      <Stack.Screen
        component={Splash}
        options={{ headerShown: false }}
        name="Splash"
      />
      <Stack.Screen
        component={Login}
        options={{ headerShown: false }}
        name="Login"
      />
      <Stack.Screen
        component={Register}
        options={{ headerShown: false }}
        name="Registro"
      />
    </Stack.Navigator>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        options={{
          title: "inicio",
          headerBackTitle: "Volver",
          headerShown: false,
        }}
        name="Home"
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const { isFinishSplash, isLogIn } = useLogin();

  return isLogIn ? <MainStack /> : <Init />;
};

export default MainNavigator;
