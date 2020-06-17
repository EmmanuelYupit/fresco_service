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
import {
  RectButton,
  ScrollView,
  TextInput,
} from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
//import t from "tco";
import BracketForm from "../components/directionForm/BracketForm";
const { height, width } = Dimensions.get("window");

export default function Deliver() {
  return <BracketForm />;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff",
  },
});
