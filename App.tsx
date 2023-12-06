import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./pages/HomePage/HomePage";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CharacterPage" component={CharacterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
