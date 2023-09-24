import React from "react";

import Card from "../components/Card";
import Header from "../components/Header";
import AppText from "../components/AppText";
import ValidationTextInput from "../components/ValidationTextInput";
import APPCheckBox from "../components/APPCheckBox";
import AppBotton from "../components/AppBotton";
import ConfirmScreen from "./ConfirmScreen";
import Screen from "../components/Screen";

export default function GameScreen(props) {
  return (
    <Screen>
      <Card>
        <Header>Guess A Number Between 10 & 20</Header>
      </Card>
    </Screen>
  );
}
