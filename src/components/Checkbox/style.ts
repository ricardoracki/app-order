import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: theme.colors.purple[300],
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    backgroundColor: theme.colors.green[500],
    borderColor: theme.colors.green[500],
  },
});
