import { StyleSheet, Text, View, Button } from "react-native";
import { Dimensions } from "react-native";
import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";
import { ICharacter } from "../../pages/CharacterPage/CharacterPage";

const width = Dimensions.get("window").width - 40;
const height = Dimensions.get("window").height * 0.2;

export const CharacterStatsBar = ({ character }: Props) => {
  return (
    <View style={styles.bar}>
      <Text style={styles.header}>Current Character</Text>
      <Text style={styles.text}>{"Name: " + character.name}</Text>
      <Text style={styles.text}>{"isAttack: " + character.isAttack}</Text>
      <Text style={styles.text}>{"isHeal: " + character.isHeal}</Text>
      <Text style={styles.text}>{"isSummon: " + character.isSummon}</Text>
      <Text style={styles.text}>{"isInherited: " + character.isInherited}</Text>

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

type Props = {
  character: ICharacter;
};
