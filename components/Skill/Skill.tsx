import { View, Text, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { ICharacter } from "../../pages/CharacterPage/CharacterPage";

const translate = new Map([
  ["Wody", "water"],
  ["Ognia", "fire"],
  ["Wiatru", "wind"],
  ["Ziemii", "earth"],
  ["Leczenia", "heal"],
  ["Detoksykacji", "detoxification"],
  ["Boskiego uderzenia", "divineStrike"],
  ["Ochrony", "protection"],
  ["Duchów", "fiends"],
  ["Diabłów", "spirits"],
]);

export const Skill = ({ children, character, setCharacterState }: Props) => {
  const skillName = translate.get(children);
  const handler = (item: string) => {
    setCharacterState((prev) => {
      return {
        ...prev,
        [skillName === undefined ? "err" : skillName]: item,
      };
    });
  };
  return (
    <>
      <View style={styles.bar}>
        <Text style={styles.h2}>{children}</Text>
        <SelectDropdown
          data={[
            "Żaden",
            "Początkujący",
            "Średniozaawansowany",
            "Zaawansowany",
            "Święty",
            "Królewski",
            "Cesarski",
            "Boski",
          ]}
          onSelect={(item) => {
            handler(item);
          }}
          defaultValue={character[skillName as keyof ICharacter]}
          buttonStyle={styles.buttonDropdown}
        />
      </View>
    </>
  );
};

type Props = {
  children: string;
  character: ICharacter;
  setCharacterState: React.Dispatch<React.SetStateAction<ICharacter>>;
};

const styles = StyleSheet.create({
  bar: {
    borderRadius: 20,
    backgroundColor: "#334155",

    marginBottom: 10,
  },
  text: { color: "white" },
  h2: { color: "white", fontSize: 20 },
  h3: { color: "white", fontSize: 15 },
  buttonDropdown: { marginBottom: 20, borderRadius: 20, height: 40 },
});
