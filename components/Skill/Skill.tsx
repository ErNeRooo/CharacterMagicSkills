import { View, Text } from "react-native";
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

export const Skill = ({ children, setCharacterState }: Props) => {
  const skillSchool = translate.get(children);
  const handler = (index: number) => {
    setCharacterState((prev) => {
      return {
        ...prev,
        [skillSchool === undefined ? "err" : skillSchool]: index,
      };
    });
  };
  return (
    <>
      <Text>{children}</Text>
      <View>
        <Text>Poziom: </Text>
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
          onSelect={(item, index) => {
            handler(index);
          }}
          defaultValue={"Żaden"}
        />
      </View>
    </>
  );
};

type Props = {
  children: string;
  setCharacterState: React.Dispatch<React.SetStateAction<ICharacter>>;
};
