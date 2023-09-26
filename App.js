import { useAnimatedValue } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartingScreenV2 from "./screens/StartingScreenV2";
import { useState } from "react";

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleGameStart = () => {
    setIsGameStarted(true);
  };

  const handleLogout = () => {
    setIsGameStarted(false);
  };

  return isGameStarted ? (
    <GameScreen onLogout={handleLogout} />
  ) : (
    <StartingScreenV2 onConfirmed={handleGameStart} />
  );
}
