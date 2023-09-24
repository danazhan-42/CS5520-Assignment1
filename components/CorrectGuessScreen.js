import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import Card from "./Card";
import AppButton from "./AppButton";
import AppText from "./AppText";

export default function CorrectGuessScreen({
  number,
  guesses,
  onStartNewGame,
}) {
  return (
    <>
      <View style={styles.topContainer}>
        <AppButton title="Logout" color="blue"></AppButton>
      </View>
      <View style={styles.bottomContainer}>
        <Card alignItems="center">
          <AppText style={styles.msg}>
            You guessed correct!{"\n"}Number of guesses: {guesses}
          </AppText>
          <Image
            source={{
              url: "https://picsum.photos/id/14/100/100",
            }}
            style={styles.image}
          ></Image>
          <AppButton
            title="New Game"
            color="blue"
            onPress={onStartNewGame}
          ></AppButton>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 10,
    justifyContent: "flext-start",
    alignItems: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: "90%",
  },
  image: {
    width: 80,
    height: 80,
  },
  msg: {
    paddingBottom: 30,
  },
});
