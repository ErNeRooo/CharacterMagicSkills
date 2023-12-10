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
          onSelect={(item) => {
            handler(item);
          }}
          defaultValue={character[skillName as keyof ICharacter]}
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
