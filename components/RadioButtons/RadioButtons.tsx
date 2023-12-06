import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

export const RadioButtons = ({ children }: Props) => {
  const [checked, setChecked] = useState(children[0]);

  return children.map((item) => {
    return (
      <View style={styles.row}>
        <RadioButton
          value={item}
          status={checked === item ? "checked" : "unchecked"}
          onPress={() => setChecked(item)}
        />
        <Text>{item}</Text>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
});
type Props = {
  children: string[];
};
