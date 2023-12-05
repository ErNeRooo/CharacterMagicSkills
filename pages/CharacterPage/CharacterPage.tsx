import { StyleSheet, Text, View } from "react-native";

export const CharacterPage = () => {
  return (
    <View style={styles.container}>
      <Text>CharacterPage</Text>
    </View>
  );
};

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
