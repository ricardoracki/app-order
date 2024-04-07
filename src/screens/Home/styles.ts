import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray[700],
  },
  header: {
    padding: 12,
    marginTop: -130,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    opacity: 0.7,
  },
  emptyMessage: {
    textAlign: "center",
    fontWeight: "bold",
    color: theme.colors.gray[200],
    fontSize: 16,
    opacity: 0.5,
  },
});
