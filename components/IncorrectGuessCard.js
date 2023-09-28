import { StyleSheet, View, Image, Button } from "react-native";
import React from "react";

import Card from "./Card";
import AppText from "./AppText";

export default function IncorrectGuessCard({ onTryAgain }) {
  return (
    <>
      <Card>
        <AppText style={{ alignSelf: "center" }}>
          You did not guess correct!
        </AppText>
        <Image
          source={require("../assets/sadface.png")}
          style={styles.image}
        ></Image>
        <Button title="Try Again" color="blue" onPress={onTryAgain}></Button>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    margin: 30,
  },
  topContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: "90%",
    height: "auto",
  },
});
