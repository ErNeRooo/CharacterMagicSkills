import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./pages/HomePage/HomePage";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
import { useContext } from "react";
import { CharacterContext } from "./context/CharacterContext";

const Theme = {
  dark: true,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "#0f172a",
    card: "#1e293b",
    text: "white",
    border: "#1e293b",
    notification: "#334155",
  },
};

const Stack = createNativeStackNavigator();
const character = useContext(CharacterContext);

export default function App() {
  return (
    <CharacterContext.Provider value={character}>
      <NavigationContainer theme={Theme}>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="CharacterPage" component={CharacterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </CharacterContext.Provider>
  );
}
