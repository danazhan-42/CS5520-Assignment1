import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

import Screen from "../components/Screen";
import InitialGuessCard from "../components/InitialGuessCard";
import IncorrectGuessCard from "../components/IncorrectGuessCard";
import CorrectGuessScreen from "../components/CorrectGuessCard";

export default function GameScreen({ onLogout }) {
  const [randomNumber, setRandomNumber] = useState(generateRandom(10, 20));
  const [userGuess, setUserGuess] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);

  function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleGuess(guessedNumber) {
    setUserGuess(guessedNumber);
    setGuessCount((prevCount) => prevCount + 1);

    if (guessedNumber == randomNumber) {
      setIsCorrectGuess(true);
    } else {
      setIsCorrectGuess(false);
    }
  }

  const handleTryAgain = () => {
    setUserGuess("");
  };

  const handleNewGame = () => {
    setUserGuess("");
    setGuessCount(0);
    setRandomNumber(generateRandom(10, 20));
    setIsCorrectGuess(false);
  };

  const handleLogout = () => {
    onLogout(true);
  };

  let displayScreen;

  if (!userGuess) {
    displayScreen = <InitialGuessCard onConfirmGuess={handleGuess} />;
  } else if (userGuess && !isCorrectGuess) {
    displayScreen = <IncorrectGuessCard onTryAgain={handleTryAgain} />;
  } else {
    displayScreen = (
      <CorrectGuessScreen
        onStartNewGame={handleNewGame}
        number={userGuess}
        guesses={guessCount}
      />
    );
  }

  return (
    <Screen>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} color="blue"></Button>
      </View>
      {displayScreen}
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 90,
    alignItems: "flex-end",
    justifyContent: "center",
    width: "80%",
    paddingTop: 30,
    marginBottom: 20,
  },
});
