import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { Skill } from "../../components/Skill/Skill";
import { RadioButtons } from "../../components/RadioButtons/RadioButtons";
import { SkillCheckBoxes } from "../../components/SkillCheckBoxes/SkillCheckBoxes";
import { CharacterContext } from "../../context/CharacterContext";

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
    console.log(character);

    navigation.navigate("HomePage");
  };

  return (
    <CharacterContext.Provider value={character}>
      <ScrollView style={styles.container}>
        <View style={styles.bar}>
          <View style={styles.InputBar}>
            <Text style={styles.h1}>Imię twojej postaci:</Text>
            <TextInput
              value={character.name}
              onChangeText={(text) =>
                setCharacter((prev) => ({
                  ...prev,
                  name: text,
                }))
              }
              style={styles.TextInput}
              placeholderTextColor={"#a8a29e"}
              selectionColor={"#2563eb"}
              placeholder={"Podaj Imię"}
              maxLength={45}
            ></TextInput>
          </View>
        </View>

        <View style={styles.bar}>
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
              trackColor={{ true: "#3b82f6" }}
              thumbColor={"#1d4ed8"}
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

        <View style={styles.bar}>
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
              trackColor={{ true: "#3b82f6" }}
              thumbColor={"#1d4ed8"}
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

        <View style={styles.bar}>
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
              trackColor={{ true: "#3b82f6" }}
              thumbColor={"#1d4ed8"}
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

        <View style={styles.bar}>
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
              trackColor={{ true: "#3b82f6" }}
              thumbColor={"#1d4ed8"}
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

        <View style={styles.bar}>
          <View style={styles.RadioBar}>
            <Text style={styles.h1}>Rasa</Text>
            <RadioButtons character={character} setCharacter={setCharacter}>
              {["Człowiek", "Smok", "Elf", "Krasnolud", "Bestia", "Demon"]}
            </RadioButtons>
          </View>
        </View>

        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
          <Text style={styles.h1}>Submit</Text>
        </TouchableOpacity>
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
  bar: {
    width: width - 40,

    backgroundColor: "#1e293b",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  InputBar: {
    marginVertical: 10,
  },
  TextInput: {
    color: "white",
    paddingLeft: 10,
    height: 30,
    backgroundColor: "#0f172a",
    borderRadius: 15,
    marginTop: 10,
  },
  RadioBar: {
    marginVertical: 10,
  },
  text: { color: "white" },
  h1: { color: "white", fontSize: 20 },
  h2: { color: "white", fontSize: 15 },
  btn: {
    width: width - 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2563eb",
    marginHorizontal: 20,
    marginTop: 10,
    paddingHorizontal: 15,

    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-around",
  },
});
