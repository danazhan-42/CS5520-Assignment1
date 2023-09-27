import React from "react";
import { Button, StyleSheet, View } from "react-native";

function AppButton({ title, onPress, color, disabled = false }) {
  return (
    <Button title={title} onPress={onPress} color={color} disabled={disabled} />
  );
}

export default AppButton;
