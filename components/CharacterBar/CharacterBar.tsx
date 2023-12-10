import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { ICharacter } from "../../pages/CharacterPage/CharacterPage";

const width = Dimensions.get("window").width - 40;
const height = Dimensions.get("window").height * 0.1;

export const CharacterBar = ({ navigation }: Props) => {
  return (
    <TouchableOpacity
      style={styles.bar}
      onPress={() => navigation.navigate("CharacterPage")}
    >
      <Text style={styles.header}>Add Character</Text>
    </TouchableOpacity>
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

type Props = {
  navigation: any;
};
