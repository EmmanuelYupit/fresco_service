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
import { RectButton, ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

const { height, width } = Dimensions.get("window");

export default function ProductDetail() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      const result = axios
        .get("http://192.168.0.4:3000/api/v1/product")
        .then((res) => {
          setProduct(res.data);
          setRefreshing(false);
        })
        .catch((err) => {
          console.log(err);
          setRefreshing(false);
        });
    });
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ height: 20 }} />
      <View style={{ height: 10 }} />

      <View style={{ flex: 1 }}>
        <View
          style={{
            width: width - 20,
            margin: 10,
            backgroundColor: "transparent",
            flexDirection: "row",
            borderColor: "#cccccc",
          }}
        >
          <Image
            resizeMode={"contain"}
            style={{ width: width / 2, height: width / 3 }}
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
              <Text style={{ fontWeight: "bold", fontSize: 40 }}>$15</Text>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>el kilo</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: width - 20,
            margin: 10,
            backgroundColor: "transparent",
            flexDirection: "row",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}
          >
            Jitomate Saladette de primera
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity>
              <Icon name="ios-remove-circle" size={40} color={"#9fd236"} />
            </TouchableOpacity>
            <Text
              style={{
                paddingHorizontal: 8,
                fontWeight: "bold",
                fontSize: 30,
              }}
            >
              5 kilos
            </Text>
            <TouchableOpacity>
              <Icon name="ios-add-circle" size={40} color={"#9fd236"} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              color: "#9fd236",
              fontSize: 40,
              alignItems: "center",
            }}
          >
            $565 Total
          </Text>
        </View>
      </View>

      <TouchableOpacity
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
          Agregar al carrito
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
