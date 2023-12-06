import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import CheckBox from "expo-checkbox";

export const SkillCheckBoxes = () => {
  const [valuesCheckBox, setValuesCheckBox] = useState({
    isHowling: false,
    isTeleport: false,
    isGravityManipulation: false,
    isTimeTravel: false,
    isHypnosis: false,
    isMagicDisruption: false,
    isReincarnation: false,
    isDivination: false,
    isTemporarySoulSummoning: false,
  });

  return (
    <>
      <View style={styles.row}>
        <CheckBox
          value={valuesCheckBox.isHowling}
          onValueChange={() =>
            setValuesCheckBox((prev) => ({
              ...prev,
              isHowling: !valuesCheckBox.isHowling,
            }))
          }
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
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center" },
});
