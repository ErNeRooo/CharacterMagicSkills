import { View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export const Skill = ({ children, setCharacterState }: Props) => {
  const handler = (index: number) => {
    return index;
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
          onSelect={(index) => {
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
  setCharacterState: () => void;
};
