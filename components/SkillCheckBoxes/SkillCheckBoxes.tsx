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

  const getValue = (field: keyof ICharacter): boolean => {
    const value = typedKeys(character).find(() => field);

    return typeof value === "boolean" ? value : false;
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
    /* 
    <>
      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox["isHowling"]}
          onValueChange={() => Handler("isHowling")}
        />
        <Text>Krzyku</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox.isTeleport}
          onValueChange={() =>
            setValuesCheckBox((prev) => ({
              ...prev,
              isTeleport: !valuesCheckBox.isTeleport,
            }))
          }
        />
        <Text>Teleportacji</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox.isGravityManipulation}
          onValueChange={() =>
            setValuesCheckBox((prev) => ({
              ...prev,
              isGravityManipulation: !valuesCheckBox.isGravityManipulation,
            }))
          }
        />
        <Text>Grawitacji</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox.isTimeTravel}
          onValueChange={() =>
            setValuesCheckBox((prev) => ({
              ...prev,
              isTimeTravel: !valuesCheckBox.isTimeTravel,
            }))
          }
        />
        <Text>Podróży w czasie</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox.isHypnosis}
          onValueChange={() =>
            setValuesCheckBox((prev) => ({
              ...prev,
              isHypnosis: !valuesCheckBox.isHypnosis,
            }))
          }
        />
        <Text>Hipnozy</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox.isMagicDisruption}
          onValueChange={() =>
            setValuesCheckBox((prev) => ({
              ...prev,
              isMagicDisruption: !valuesCheckBox.isMagicDisruption,
            }))
          }
        />
        <Text>Zakłócania Magii</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox.isReincarnation}
          onValueChange={() =>
            setValuesCheckBox((prev) => ({
              ...prev,
              isReincarnation: !valuesCheckBox.isReincarnation,
            }))
          }
        />
        <Text>Reinkarnacji</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox.isDivination}
          onValueChange={() =>
            setValuesCheckBox((prev) => ({
              ...prev,
              isDivination: !valuesCheckBox.isDivination,
            }))
          }
        />
        <Text>Wróżbiarstwa</Text>
      </View>

      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox.isDivination}
          onValueChange={() =>
            setValuesCheckBox((prev) => ({
              ...prev,
              isTemporarySoulSummoning:
                !valuesCheckBox.isTemporarySoulSummoning,
            }))
          }
        />
        <Text>Tymczasowego Przyzywania Dusz</Text>
      </View>
      </>
      */
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
