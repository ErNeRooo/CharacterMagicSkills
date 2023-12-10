import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { useCurrentCharacter } from "../../hooks/useCurrentCharacter";

const width = Dimensions.get("window").width - 40;
const height = Dimensions.get("window").height * 0.2;

export const CharacterStatsBar = () => {
  const { currentCharacter } = useCurrentCharacter();
  return (
    <View style={styles.bar}>
      <Text style={styles.header}>Current Character</Text>
      <Text>{"Imię: " + currentCharacter.name}</Text>
      <Text>{"Rasa: " + currentCharacter.race}</Text>
      <Text>{"Magia Ataku: " + currentCharacter.isAttack}</Text>
      <Text>{"Magia Leczenia: " + currentCharacter.isHeal}</Text>
      <Text>{"Magia Przywoływania: " + currentCharacter.isSummon}</Text>
      <Text>{"Magia Wrodzona: " + currentCharacter.isInherited}</Text>
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
