import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import React from "react";

import Card from "./Card";
import AppText from "./AppText";

export default function IncorrectGuessCard({ onTryAgain, handleLogout }) {
  const onLogoutHandler = () => {
    handleLogout(true);
  };
  return (
    <>
      <View style={styles.topContainer}>
        <Button title="Logout" onPress={onLogoutHandler} color="blue"></Button>
      </View>
      <View style={styles.bottomContainer}>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 30,
  },
  bottomContainer: {
    flex: 10,
    justifyContent: "flext-start",
    alignItems: "center",
  },
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
