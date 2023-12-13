import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { CharacterBar } from "../../components/CharacterBar/CharacterBar";
import { CharacterStatsBar } from "../../components/CharacterStatsBar/CharacterStatsBar";
import { ICharacter } from "../CharacterPage/CharacterPage";
import { useContext } from "react";
import { CharacterContext } from "../../context/CharacterContext";

export function HomePage({ navigation }: Props) {
  const character = useContext(CharacterContext);

  return (
    <View style={styles.container}>
      <CharacterBar navigation={navigation}></CharacterBar>
      <CharacterStatsBar character={character}></CharacterStatsBar>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
});

type Props = {
  navigation: any;
};
