import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  message: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    zIndex: 50,
    color: theme.colors.gray[200],
    paddingVertical: 12,
  },
});
