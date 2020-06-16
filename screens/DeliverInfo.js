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
const { height, width } = Dimensions.get("window");

/*const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean,
});*/
export default function Deliver() {
  const [value, onChangeText] = React.useState("Useless Placeholder");
  return (
    <View style={styles.container}>
      <Form type={User} /> {/* Notice the addition of the Form component */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff",
  },
});
