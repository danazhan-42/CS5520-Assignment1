import { useAnimatedValue } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartingScreenV2 from "./screens/StartingScreenV2";
import { useState } from "react";

export default function App() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  return isConfirmed ? (
    <GameScreen />
  ) : (
    <StartingScreenV2 setIsConfirmed={setIsConfirmed} />
  );
}
