import { useAnimatedValue } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartingScreenV2 from "./screens/StartingScreenV2";
import { useState } from "react";

export default function App() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  // default: starting screen
  // 如果continue被触发，进入game screen
  // 如果game screen 里面的logout被触发，进入starting screen，并把所有数据都清零，包括random number和用户输入的信息

  return isConfirmed ? (
    <GameScreen onLogout={setIsLogout} />
  ) : (
    <StartingScreenV2 onConfirmed={setIsConfirmed} />
  );
}
