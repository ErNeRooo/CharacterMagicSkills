import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./pages/HomePage/HomePage";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";

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

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CharacterPage" component={CharacterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
