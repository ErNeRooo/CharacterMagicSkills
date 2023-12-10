import { StyleSheet, Text, View } from "react-native";
import CheckBox from "expo-checkbox";
import { ICharacter } from "../../pages/CharacterPage/CharacterPage";

export const SkillCheckBoxes = ({ character, setCharacter }: Props) => {
  const toFieldNames: Map<string, string> = new Map([
    ["Krzyku", "isHowling"],
    ["Teleportacji", "isTeleport"],
    ["Grawitacji", "isGravityManipulation"],
    ["Podróży w czasie", "isTimeTravel"],
    ["Hipnozy", "isHypnosis"],
    ["Zakłócania Magii", "isMagicDisruption"],
    ["Reinkarnacji", "isReincarnation"],
    ["Wróżbiarstwa", "isDivination"],
    ["Tymczasowego Przyzywania Dusz", "isTemporarySoulSummoning"],
  ]);

  const values: string[] = [
    "Krzyku",
    "Teleportacji",
    "Grawitacji",
    "Podróży w czasie",
    "Hipnozy",
    "Zakłócania Magii",
    "Reinkarnacji",
    "Wróżbiarstwa",
    "Tymczasowego Przyzywania Dusz",
  ];

  const Handler = (field: keyof ICharacter) => {
    setCharacter((prev) => ({
      ...prev,
      [field]: !character[field as keyof ICharacter],
    }));
  };

  return (
    <>
      {values.map((name) => {
        const field: keyof ICharacter = toFieldNames.get(
          name
        ) as keyof ICharacter;

        return (
          <View style={styles.row}>
            <CheckBox
              value={!!character[field as keyof ICharacter]}
              onValueChange={() => Handler(field)}
            />
            <Text>{name}</Text>
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
});

function typedKeys<T extends Object>(o: T): (keyof T)[] {
  return Object.keys(o) as (keyof T)[];
}

type Props = {
  character: ICharacter;
  setCharacter: React.Dispatch<React.SetStateAction<ICharacter>>;
};
