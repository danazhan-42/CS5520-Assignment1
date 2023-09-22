import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Card from "./components/Card";
import Header from "./components/Header";
import StartingScreen from "./screens/StartingScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header />
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottomContainer}>
        <Card></Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightsteelblue",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  bottomContainer: {
    flex: 8,
    alignItems: "stretch",
  },
});
