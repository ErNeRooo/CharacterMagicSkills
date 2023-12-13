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
        <View style={styles.subBar}>
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
            defaultButtonText={"Wybierz"}
            buttonStyle={styles.buttonDropdown}
            buttonTextStyle={styles.textDropdown}
            dropdownStyle={styles.viewDropdown}
            rowStyle={styles.rowDropdown}
            rowTextStyle={styles.rowTextDropdown}
          />
        </View>
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
  subBar: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text: { color: "white" },
  h2: { color: "white", fontSize: 20, textAlign: "center" },
  buttonDropdown: {
    borderRadius: 20,
    width: "auto",
    backgroundColor: "#0f172a",
    marginTop: 10,
  },
  textDropdown: {
    color: "#a8a29e",
  },
  viewDropdown: {
    margin: 0,
    backgroundColor: "#0f172a",
    borderRadius: 20,
  },
  rowDropdown: {
    borderColor: "#475569",
    borderStyle: "solid",
  },
  rowTextDropdown: {
    color: "#a8a29e",
  },
});
