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
    name: "",
    isAttack: false,
    isHeal: false,
    isSummon: false,
    isInherited: false,
    water: 0,
    fire: 0,
    wind: 0,
    earth: 0,
    heal: 0,
    detoxification: 0,
    divineStrike: 0,
    protection: 0,
    fiends: 0,
    spirits: 0,
  });

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Imię twojej postaci:</Text>
        <TextInput
          value={character.name}
          onChangeText={(text) =>
            setCharacter((prev) => ({
              ...prev,
              name: text,
            }))
          }
          placeholder="wpisz imię"
        ></TextInput>
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

          <Skill setCharacterState={setCharacter}>{"Wody"}</Skill>
          <Skill setCharacterState={setCharacter}>{"Ognia"}</Skill>
          <Skill setCharacterState={setCharacter}>{"Wiatru"}</Skill>
          <Skill setCharacterState={setCharacter}>{"Ziemii"}</Skill>
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

          <Skill setCharacterState={setCharacter}>{"Leczenia"}</Skill>
          <Skill setCharacterState={setCharacter}>{"Detoksykacji"}</Skill>
          <Skill setCharacterState={setCharacter}>{"Boskiego uderzenia"}</Skill>
          <Skill setCharacterState={setCharacter}>{"Ochrony"}</Skill>
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

          <Skill setCharacterState={setCharacter}>{"Duchów"}</Skill>
          <Skill setCharacterState={setCharacter}>{"Diabłów"}</Skill>
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
