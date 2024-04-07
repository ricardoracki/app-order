import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    padding: 12,
    gap: 4,
    paddingBottom: 16,
  },

  container: {
    flexDirection: "row",
    backgroundColor: theme.colors.gray[400],
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.gray[300],
    gap: 16,
  },
  marked: {
    opacity: 0.5,
  },
  content: {
    flex: 1,
    gap: 2,
  },
  title: {
    color: theme.colors.gray[100],
    fontWeight: "bold",
    fontSize: 14,
  },
  titleMarked: {
    textDecorationLine: "line-through",
  },
  description: {
    color: theme.colors.gray[200],
    fontSize: 12,
  },
});
