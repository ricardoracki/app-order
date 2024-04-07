import { Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from "./style";

export function Checkbox({ onChangeValue, value }: CheckboxProps) {
  return (
    <Pressable
      style={[styles.checkbox, value && styles.checked]}
      onPress={() => onChangeValue((v) => !v)}
    >
      {value && <FontAwesome5 name="check" size={10} color="white" />}
    </Pressable>
  );
}
