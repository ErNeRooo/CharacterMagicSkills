import { StyleSheet, Text, View } from "react-native";

export const AddCharacterBar = () => {
  return (
    <View style={styles.panel}>
      <Text>Add Character</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    marginTop: 30,
    width: 10,
    height: 20,
    flex: 2,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: { fontSize: 20, color: "cyan" },
});
