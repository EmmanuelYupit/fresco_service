import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { RectButton, ScrollView, FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const { height, width } = Dimensions.get("window");

export default function CartScreen({ navigation }) {
  const [products, setProducts] = React.useState([
    {
      id: 1,
      src: require("../assets/images/products/aguacate.png"),
      name: "Aguacate",
      price: 25.5,
    },
    {
      id: 2,
      src: require("../assets/images/products/aguacate.png"),
      name: "Limon",
      price: 10.5,
    },
    {
      id: 3,
      src: require("../assets/images/products/aguacate.png"),
      name: "Cebolla Morada",
      price: 25.5,
    },
  ]);
  function _renderItemFood(item) {
    return (
      <TouchableOpacity
        style={{
          width: width - 20,
          margin: 10,
          backgroundColor: "transparent",
          flexDirection: "row",
          borderBottomWidth: 2,
          borderColor: "#cccccc",
          paddingBottom: 10,
        }}
      >
        <Image
          resizeMode={"contain"}
          style={{ width: width / 3, height: width / 3 }}
          source={require("../assets/images/products/aguacate.png")}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
              {item.name}
            </Text>
            <Text>Descripcion de food</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontWeight: "bold", color: "#9fd236", fontSize: 20 }}
            >
              $565
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ paddingHorizontal: 8, fontWeight: "bold" }}>
                5 kilos
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flex: 1 }}>
        <FlatList
          //horizontal={true}
          data={products}
          numColumns={1}
          renderItem={({ item }) => _renderItemFood(item)}
        />
      </View>

      <View style={{ height: 20 }} />

      <TouchableOpacity
        onPress={() => navigation.push("Deliver")}
        style={{
          backgroundColor: "#9fd236",
          width: width - 40,
          alignItems: "center",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
          }}
        >
          COMPRAR $500
        </Text>
      </TouchableOpacity>

      <View style={{ height: 20 }} />
    </View>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton
      style={[styles.option, isLastOption && styles.lastOption]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: "#ededed",
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginTop: 1,
  },
});
