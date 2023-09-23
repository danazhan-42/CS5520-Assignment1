import React from "react";
import { Button, StyleSheet, View } from "react-native";

function AppButton({ title, onPress, color, disabled }) {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={title}
        onPress={onPress}
        color={color}
        disabled={disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
});

export default AppButton;
