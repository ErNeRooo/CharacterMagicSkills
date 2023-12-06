import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  ScrollView,
} from "react-native";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { Skill } from "../../components/Skill/Skill";

export const CharacterPage = () => {
  const [isAttack, setIsAttack] = useState(false);
  const [isHealing, setIsHealing] = useState(false);
  const [isSummon, setIsSummon] = useState(false);
  const [isInherited, setIsInherited] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Imię twojej postaci:</Text>
        <TextInput placeholder="wpisz imię"></TextInput>
      </View>

      <View style={styles.magic}>
        <Text>Magia Ataku</Text>
        <Switch
          onValueChange={() => setIsAttack((prev) => !prev)}
          value={isAttack}
        />
      </View>
      {isAttack && (
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
          onValueChange={() => setIsHealing((prev) => !prev)}
          value={isHealing}
        />
      </View>
      {isHealing && (
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
          onValueChange={() => setIsSummon((prev) => !prev)}
          value={isSummon}
        />
      </View>
      {isSummon && (
        <View>
          <Text>Szkoła: </Text>

          <Skill>{"Duchów"}</Skill>
          <Skill>{"Diabłów"}</Skill>
        </View>
      )}

      <View style={styles.magic}>
        <Text>Magia Wrodzona</Text>
        <Switch
          onValueChange={() => setIsInherited((prev) => !prev)}
          value={isInherited}
        />
      </View>
      {isInherited && <View></View>}

      <View>
        <Text>Rasa</Text>
        <SelectDropdown
          data={["Człowiek", "Smok", "Elf", "Krasnolud", "Bestia", "Demon"]}
          onSelect={(item) => item}
        />
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
