import React, { useState } from "react";

import Screen from "../components/Screen";
import InitialGuessCard from "../components/InitialGuessCard";
import IncorrectGuessCard from "../components/IncorrectGuessCard";

export default function GameScreen(props) {
  const [randomNumber, setRandomNumber] = useState(generateRandom(10, 20));
  const [guessCount, setGuessCount] = useState(0);
  const [isCorrectGuess, setIsCorrectGuess] = useState(false);

  function handleGuess(guessedNumber) {
    setGuessCount((prevCount) => prevCount + 1);

    if (guessedNumber == randomNumber) {
      setIsCorrectGuess(true);
    } else {
      setIsCorrectGuess(false);
    }
  }

  function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <Screen>
      <IncorrectGuessCard></IncorrectGuessCard>
    </Screen>
  );
}
