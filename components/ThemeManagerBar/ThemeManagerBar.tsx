import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width - 40;
const height = Dimensions.get("window").height * 0.1;

export const ThemeManagerBar = () => {
  return (
    <View style={styles.bar}>
      <Text style={styles.header}>Theme</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: width,
    height: height,

    marginBottom: 20,

    borderRadius: 20,
    backgroundColor: "#FCA311",

    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  header: { fontSize: 20, color: "white" },
});
