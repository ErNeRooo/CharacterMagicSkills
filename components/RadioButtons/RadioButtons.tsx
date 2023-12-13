import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { ICharacter } from "../../pages/CharacterPage/CharacterPage";

export const RadioButtons = ({ children, setCharacter, character }: Props) => {
  const Handler = (item: string) => {
    setCharacter((prev) => {
      return {
        ...prev,
        race: item,
      };
    });
  };

  return children.map((item) => {
    return (
      <View style={styles.row}>
        <RadioButton
          value={item}
          status={character.race === item ? "checked" : "unchecked"}
          onPress={() => Handler(item)}
        />
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
  text: { color: "white" },
});
type Props = {
  character: ICharacter;
  setCharacter: React.Dispatch<React.SetStateAction<ICharacter>>;
  children: string[];
};
