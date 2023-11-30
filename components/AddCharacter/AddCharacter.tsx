import { StyleSheet, Text, View } from "react-native";

export const AddCharacter = () => {
  return (
    <View style={styles.panel}>
      <Text>Add Character</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    marginTop: 30,
    flex: 2,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: { fontSize: 20, color: "cyan" },
});
