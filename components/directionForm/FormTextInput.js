import React from "react";
import { useField } from "formik";
import { TextInput } from "react-native-paper";

export default function FormTextInput({ fieldName, ...props }) {
  const [field] = useField(fieldName);
  return (
    <TextInput
      value={field.value}
      mode="outlined"
      onChangeText={field.onChange(fieldName)}
      {...props}
    />
  );
}
