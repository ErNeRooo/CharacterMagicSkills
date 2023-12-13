import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  ScrollView,
  Button,
  ToastAndroid,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { Skill } from "../../components/Skill/Skill";
import { RadioButtons } from "../../components/RadioButtons/RadioButtons";
import { SkillCheckBoxes } from "../../components/SkillCheckBoxes/SkillCheckBoxes";
import { CharacterContext } from "../../context/CharacterContext";
import { Colors } from "react-native/Libraries/NewAppScreen";

const width = Dimensions.get("window").width;

export const CharacterPage = ({ navigation }: Props) => {
  const [currentCharacter, setCurrentCharacter] = useState({
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
    //ToastAndroid.show("Character Added", ToastAndroid.SHORT);

    setCurrentCharacter(character);
    console.log(currentCharacter);
    console.log(character);

    navigation.navigate("HomePage");
  };

  return (
    <CharacterContext.Provider value={character}>
      <ScrollView style={styles.container}>
        <View style={styles.inputBar}>
          <Text style={styles.h1}>Imię twojej postaci:</Text>
          <TextInput
            value={character.name}
            onChangeText={(text) =>
              setCharacter((prev) => ({
                ...prev,
                name: text,
              }))
            }
            style={styles.h2}
            placeholder="wpisz imię"
          ></TextInput>
        </View>

        <View style={styles.inputBar}>
          <View style={styles.row}>
            <Text style={styles.h1}>Magia Ataku</Text>
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
        </View>

        <View style={styles.inputBar}>
          <View style={styles.row}>
            <Text style={styles.h1}>Magia Leczenia</Text>
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
        </View>

        <View style={styles.inputBar}>
          <View style={styles.row}>
            <Text style={styles.h1}>Magia Przywoływania</Text>
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
              <Skill character={character} setCharacterState={setCharacter}>
                {"Duchów"}
              </Skill>
              <Skill character={character} setCharacterState={setCharacter}>
                {"Diabłów"}
              </Skill>
            </View>
          )}
        </View>

        <View style={styles.inputBar}>
          <View style={styles.row}>
            <Text style={styles.h1}>Magia Wrodzona</Text>
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
              <SkillCheckBoxes
                character={character}
                setCharacter={setCharacter}
              />
            </View>
          )}
        </View>

        <View style={styles.inputBar}>
          <Text style={styles.h1}>Rasa</Text>
          <RadioButtons character={character} setCharacter={setCharacter}>
            {["Człowiek", "Smok", "Elf", "Krasnolud", "Bestia", "Demon"]}
          </RadioButtons>
        </View>

        <Button onPress={handleSubmit} title="Submit" />
      </ScrollView>
    </CharacterContext.Provider>
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
    width: width,

    flex: 1,
    flexWrap: "wrap",
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputBar: {
    width: width - 40,

    backgroundColor: "#1e293b",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    padding: 10,
  },
  text: { color: "white" },
  h1: { color: "white", fontSize: 25 },
  h2: { color: "white", fontSize: 20 },
});
