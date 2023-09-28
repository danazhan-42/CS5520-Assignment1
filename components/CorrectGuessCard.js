import { StyleSheet, View, Image, Button } from "react-native";
import React from "react";

import Card from "./Card";
import AppText from "./AppText";

export default function CorrectGuessScreen({
  number,
  guesses,
  onStartNewGame,
}) {
  return (
    <>
      <Card>
        <AppText style={{ alignSelf: "center" }}>
          You guessed correct!{"\n"}Number of guesses: {guesses}
        </AppText>
        <Image
          source={{
            uri: `https://picsum.photos/id/${number}/100/100`,
          }}
          style={styles.image}
        ></Image>
        <Button title="New Game" color="blue" onPress={onStartNewGame}></Button>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: "90%",
  },
  image: {
    width: 80,
    height: 80,
    margin: 20,
  },
  msg: {
    paddingBottom: 30,
  },
});
