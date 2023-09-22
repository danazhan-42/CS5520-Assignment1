import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import AppTextInput from "./AppTextInput";

const Card = () => {
  return (
    <View style={styles.card}>
      <AppText>Name</AppText>
      <AppTextInput></AppTextInput>
      <AppText>Email address</AppText>
      <AppText>Phone number</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    minHeight: 500,
    // Rounded corners
    borderRadius: 10,
    backgroundColor: "gainsboro",

    // Shadow
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,

    //Flexbox
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default Card;
