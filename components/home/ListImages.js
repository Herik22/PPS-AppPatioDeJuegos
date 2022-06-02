import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";

const ListImages = (props) => {
  const { imagenes } = props;
  return (
    <FlatList
      data={imagenes}
      renderItem={(tema) => <Imagen tema={tema} />}
      //keyExtractor={(item, index) => index.toString()}
      onEndReachedThreshold={0.5}
      style={{
        flex: 1,
        borderWidth: 0,
        padding: 0,
        margin: 5,
        width: "100%",
        height: "100%",
        borderRadius: 20,
      }}
    />
  );
};

function Imagen(props) {
  const { tema } = props;
  const { img, titulo } = tema.item;
  console.log(tema.item);
  return (
    <View>
      <TouchableOpacity onPress={() => {}}>
        <View style={styles.viewRestaurant}>
          <ImageBackground
            source={img}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
              {titulo}
            </Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const Colors = {
  colorLetraGris: "#86939E",
  colorfondoCB: "transparent",
  violet: "#5D287E",
  azulPt: "#2E3880",
};
const styles = StyleSheet.create({
  viewRestaurant: {
    flexDirection: "row",
    margin: 0.5,
    width: "100%", //Dimensions.get("window").width * 0.75,
    height: Dimensions.get("window").height,
    backgroundColor: "blue",
    borderRadius: 0,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default ListImages;
