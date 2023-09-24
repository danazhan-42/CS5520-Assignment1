import React from "react";

import Screen from "../components/Screen";
import InitialGuessCard from "../components/InitialGuessCard";

export default function GameScreen(props) {
  return (
    <Screen>
      <InitialGuessCard></InitialGuessCard>
    </Screen>
  );
}
