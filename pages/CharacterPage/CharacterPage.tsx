import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { Skill } from "../../components/Skill/Skill";
import { RadioButtons } from "../../components/RadioButtons/RadioButtons";
import { SkillCheckBoxes } from "../../components/SkillCheckBoxes/SkillCheckBoxes";

export const CharacterPage = () => {
  const [character, setCharacter] = useState({
    isAttack: false,
    isHeal: false,
    isSummon: false,
    isInherited: false,
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Imię twojej postaci:</Text>
        <TextInput placeholder="wpisz imię"></TextInput>
      </View>

      <View style={styles.magic}>
        <Text>Magia Ataku</Text>
        <Switch
          onValueChange={() =>
            setCharacter((prev) => ({
              ...prev,
              isAttack: !character.isAttack,
            }))
          }
          value={character.isAttack}
        />
      </View>
      {character.isAttack && (
        <View>
          <Text>Szkoła: </Text>

          <Skill>{"Wody"}</Skill>
          <Skill>{"Ognia"}</Skill>
          <Skill>{"Wiatru"}</Skill>
          <Skill>{"Ziemii"}</Skill>
        </View>
      )}

      <View style={styles.magic}>
        <Text>Magia Leczenia</Text>
        <Switch
          onValueChange={() =>
            setCharacter((prev) => ({
              ...prev,
              isHeal: !character.isHeal,
            }))
          }
          value={character.isHeal}
        />
      </View>
      {character.isHeal && (
        <View>
          <Text>Szkoła: </Text>

          <Skill>{"Leczenia"}</Skill>
          <Skill>{"Detoksykacji"}</Skill>
          <Skill>{"Boskiego uderzenia"}</Skill>
          <Skill>{"Ochrony"}</Skill>
        </View>
      )}

      <View style={styles.magic}>
        <Text>Magia Przywoływania</Text>
        <Switch
          onValueChange={() =>
            setCharacter((prev) => ({
              ...prev,
              isSummon: !character.isSummon,
            }))
          }
          value={character.isSummon}
        />
      </View>
      {character.isSummon && (
        <View>
          <Text>Szkoła: </Text>

          <Skill>{"Duchów"}</Skill>
          <Skill>{"Diabłów"}</Skill>
        </View>
      )}

      <View style={styles.magic}>
        <Text>Magia Wrodzona</Text>
        <Switch
          onValueChange={() =>
            setCharacter((prev) => ({
              ...prev,
              isInherited: !character.isInherited,
            }))
          }
          value={character.isInherited}
        />
      </View>
      {character.isInherited && (
        <View>
          <SkillCheckBoxes />
        </View>
      )}

      <View>
        <Text>Rasa</Text>
        <RadioButtons>
          {["Człowiek", "Smok", "Elf", "Krasnolud", "Bestia", "Demon"]}
        </RadioButtons>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    flexWrap: "wrap",
    //backgroundColor: "#272D2D",
    //alignItems: "flex-start",
    //justifyContent: "flex-start",
    flexDirection: "column",
  },
  magic: {
    flexDirection: "row",
    alignItems: "center",
  },
});
