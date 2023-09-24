import React, { useState } from "react";

import Screen from "../components/Screen";
import InitialGuessCard from "../components/InitialGuessCard";
import IncorrectGuessCard from "../components/IncorrectGuessCard";
import CorrectGuessScreen from "../components/CorrectGuessScreen";

export default function GameScreen(props) {
  const [userGuess, setUserGuess] = useState();
  const [randomNumber, setRandomNumber] = useState(generateRandom(10, 20));
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
  };

  let displayScreen;

  if (!userGuess) {
    <InitialGuessCard onConfirmGuess={handleGuess}></InitialGuessCard>;
  } else if (userGuess && !isCorrectGuess) {
    <IncorrectGuessCard onTryAgain={handleTryAgain}></IncorrectGuessCard>;
  } else {
    <CorrectGuessScreen onStartNewGame={handleNewGame}></CorrectGuessScreen>;
  }

  return <Screen></Screen>;
}
