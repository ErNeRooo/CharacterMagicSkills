import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AddCharacter } from "./components/AddCharacter/AddCharacter";

export default function App() {
  return (
    <View style={styles.container}>
      <AddCharacter></AddCharacter>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#272D2D",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
