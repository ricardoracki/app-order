import { Home } from "@/screens/Home";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        translucent={true}
        barStyle={"light-content"}
        backgroundColor={"transparent"}
      />
      <Home />
    </GestureHandlerRootView>
  );
}
