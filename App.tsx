import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AddCharacterBar } from "./components/AddCharacterBar/AddCharacterBar";
import { ThemeManagerBar } from "./components/ThemeManagerBar/ThemeManagerBar";
import { CurrentCharacterBar } from "./components/CurrentCharacterBar/CurrentCharacterBar";

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeManagerBar></ThemeManagerBar>
      <AddCharacterBar></AddCharacterBar>
      <CurrentCharacterBar></CurrentCharacterBar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    flex: 1,
    flexWrap: "wrap",
    //backgroundColor: "#272D2D",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});
