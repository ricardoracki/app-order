import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    color: theme.colors.gray[100],
    fontSize: 24,
  },
});
