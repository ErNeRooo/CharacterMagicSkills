import { View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export const Skill = ({ children }: Props) => {
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
          onSelect={(item) => item}
          defaultValue={"Żaden"}
        />
      </View>
    </>
  );
};

type Props = {
  children: string;
};
