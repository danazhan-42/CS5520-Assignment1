import React, { useState } from "react";

import Screen from "../components/Screen";
import InitialGuessCard from "../components/InitialGuessCard";
import IncorrectGuessCard from "../components/IncorrectGuessCard";
import CorrectGuessScreen from "../components/CorrectGuessScreen";

export default function GameScreen({ onLogout }) {
  const [userGuess, setUserGuess] = useState("");
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
    setGuessCount(0);
    setRandomNumber(generateRandom(10, 20));
    setIsCorrectGuess(false);
  };

  let displayScreen;

  if (!userGuess) {
    displayScreen = (
      <InitialGuessCard onConfirmGuess={handleGuess} handleLogout={onLogout} />
    );
  } else if (userGuess && !isCorrectGuess) {
    displayScreen = (
      <IncorrectGuessCard onTryAgain={handleTryAgain} handleLogout={onLogout} />
    );
  } else {
    displayScreen = (
      <CorrectGuessScreen
        onStartNewGame={handleNewGame}
        number={userGuess}
        guesses={guessCount}
        handleLogout={onLogout}
      />
    );
  }

  return <Screen>{displayScreen}</Screen>;
}
