import React from "react";
import { View, Dimensions, Button } from "react-native";
import { useFormikContext } from "formik";
import FormTextInput from "./FormTextInput";
import { Divider, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
const { height, width } = Dimensions.get("window");

export default function BracketFormBody() {
  const { handleChange, submitForm, values } = useFormikContext();
  return (
    <View style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
      <View style={{ width: 300 }}>
        <FormTextInput fieldName="postalCode" placeholder="Código Postal" />
        <FormTextInput fieldName="" placeholder="Delegación" />
        <FormTextInput fieldName="name" placeholder="Dirección" />
        <FormTextInput fieldName="name" placeholder="Teléfono" />
        <FormTextInput fieldName="name" placeholder="Nombre" />
      </View>
      <View style={{ height: 20 }} />
      <TouchableOpacity
        onPress={() => navigation.push("Información de entrega")}
        style={{
          backgroundColor: "#9fd236",
          width: width - 40,
          alignItems: "center",
          padding: 10,
          borderRadius: 5,
        }}
        onPress={submitForm}
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
    </View>
  );
}
