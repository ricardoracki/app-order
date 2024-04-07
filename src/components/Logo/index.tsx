import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Feather name="shopping-bag" size={26} color="white" />
    <Text style={styles.title}>Lista de Compras</Text>
  </View>
);

export { Logo };
