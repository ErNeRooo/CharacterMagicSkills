import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { CharacterBar } from "../../components/CharacterBar/CharacterBar";

export function HomePage({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <CharacterBar navigation={navigation}></CharacterBar>
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
