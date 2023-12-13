import { StyleSheet, Text, View, Button } from "react-native";
import { Dimensions } from "react-native";
import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";

const width = Dimensions.get("window").width - 40;
const height = Dimensions.get("window").height * 0.2;

export const CharacterStatsBar = () => {
  const { name, isAttack, isHeal, isSummon, isInherited } =
    useContext(CharacterContext);

  return (
    <View style={styles.bar}>
      <Text style={styles.header}>Current Character</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{isAttack}</Text>
      <Text style={styles.text}>{isHeal}</Text>
      <Text style={styles.text}>{isSummon}</Text>
      <Text style={styles.text}>{isInherited}</Text>

      <Button
        title="haah"
        onPress={() => {
          console.log(name);
        }}
      />
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
  text: { color: "white", fontSize: 10 },
});
