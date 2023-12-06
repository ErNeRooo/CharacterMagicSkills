import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import { useState } from "react";

export const CharacterPage = () => {
  const [isAttack, setIsAttack] = useState(false);
  const [isHealing, setIsHealing] = useState(false);
  const [isSummon, setIsSummon] = useState(false);
  const [isInherited, setIsInherited] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Text>Your Character Name:</Text>
        <TextInput placeholder="Name"></TextInput>
      </View>

      <Switch
        onValueChange={() => setIsAttack((prev) => !prev)}
        value={isAttack}
      />
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
