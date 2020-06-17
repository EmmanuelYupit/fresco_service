import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton, ScrollView } from "react-native-gesture-handler";
import { Card, Paragraph, Title, Button } from "react-native-paper";

export default function OrderStateScreen() {
  return (
    <Card>
      <Card.Content backgroundColor="">
        <Title
          style={{
            textAlign: "center",
          }}
        >
          Estado de la orden
        </Title>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            paddingBottom: 10,
          }}
        >
          Pagado
        </Text>
        <Button
          mode="contained"
          onPress={() => console.log("Pressed")}
          style={{
            backgroundColor: "red",
          }}
        >
          Cancelar
        </Button>
      </Card.Content>
    </Card>
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
