import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width - 40;
const height = Dimensions.get("window").height * 0.2;

export const CharacterStatsBar = () => {
  return (
    <View style={styles.bar}>
      <Text style={styles.header}>Current Character</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: width,
    height: height,

    marginBottom: 20,

    borderRadius: 20,
    backgroundColor: "#14213D",

    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  header: { fontSize: 20, color: "white" },
});
