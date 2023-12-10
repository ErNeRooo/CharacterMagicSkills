import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  ScrollView,
  Button,
  ToastAndroid,
} from "react-native";
import { useState } from "react";
import { Skill } from "../../components/Skill/Skill";
import { RadioButtons } from "../../components/RadioButtons/RadioButtons";
import { SkillCheckBoxes } from "../../components/SkillCheckBoxes/SkillCheckBoxes";
import { CurrentCharacter } from "../../components/CharacterStatsBar/CharacterStatsBar";

export const CharacterPage = ({ navigation }: Props) => {
  const [character, setCharacter] = useState({
    name: "",
    race: "",
    isAttack: false,
    isHeal: false,
    isSummon: false,
    isInherited: false,
    water: "",
    fire: "",
    wind: "",
    earth: "",
    heal: "",
    detoxification: "",
    divineStrike: "",
    protection: "",
    fiends: "",
    spirits: "",
    isHowling: false,
    isTeleport: false,
    isGravityManipulation: false,
    isTimeTravel: false,
    isHypnosis: false,
    isMagicDisruption: false,
    isReincarnation: false,
    isDivination: false,
    isTemporarySoulSummoning: false,
  });

  const handleSubmit = () => {
    ToastAndroid.show("Character Added", ToastAndroid.SHORT);
    //CurrentCharacter = character;

    navigation.navigate("HomePage");
  };

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

          <Skill character={character} setCharacterState={setCharacter}>
            {"Wody"}
          </Skill>
          <Skill character={character} setCharacterState={setCharacter}>
            {"Ognia"}
          </Skill>
          <Skill character={character} setCharacterState={setCharacter}>
            {"Wiatru"}
          </Skill>
          <Skill character={character} setCharacterState={setCharacter}>
            {"Ziemii"}
          </Skill>
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

          <Skill character={character} setCharacterState={setCharacter}>
            {"Leczenia"}
          </Skill>
          <Skill character={character} setCharacterState={setCharacter}>
            {"Detoksykacji"}
          </Skill>
          <Skill character={character} setCharacterState={setCharacter}>
            {"Boskiego uderzenia"}
          </Skill>
          <Skill character={character} setCharacterState={setCharacter}>
            {"Ochrony"}
          </Skill>
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

          <Skill character={character} setCharacterState={setCharacter}>
            {"Duchów"}
          </Skill>
          <Skill character={character} setCharacterState={setCharacter}>
            {"Diabłów"}
          </Skill>
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
          <SkillCheckBoxes character={character} setCharacter={setCharacter} />
        </View>
      )}

      <View>
        <Text>Rasa</Text>
        <RadioButtons character={character} setCharacter={setCharacter}>
          {["Człowiek", "Smok", "Elf", "Krasnolud", "Bestia", "Demon"]}
        </RadioButtons>
      </View>

      <Button onPress={handleSubmit} title="Submit" />
    </ScrollView>
  );
};

export interface ICharacter {
  name: string;
  race: string;

  isAttack: boolean;
  isHeal: boolean;
  isSummon: boolean;
  isInherited: boolean;

  water: string;
  fire: string;
  wind: string;
  earth: string;
  heal: string;
  detoxification: string;
  divineStrike: string;
  protection: string;
  fiends: string;
  spirits: string;

  isHowling: boolean;
  isTeleport: boolean;
  isGravityManipulation: boolean;
  isTimeTravel: boolean;
  isHypnosis: boolean;
  isMagicDisruption: boolean;
  isReincarnation: boolean;
  isDivination: boolean;
  isTemporarySoulSummoning: boolean;
}
type Props = {
  navigation: any;
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
