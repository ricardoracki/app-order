import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backdrop: {
    opacity: 0.7,
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 20,
  },
  content: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    minWidth: 200,
    backgroundColor: theme.colors.gray[500],
    zIndex: 30,
    gap: 6,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: theme.colors.gray[100],
    padding: 18,
    textAlign: "center",
    backgroundColor: theme.colors.gray[500],
  },
  subtitle: {
    fontWeight: "500",
    fontSize: 16,
    opacity: 0.8,
    padding: 12,
  },
  item: {
    borderRadius: 8,
    backgroundColor: theme.colors.gray[300],
    flexDirection: "row",
    gap: 6,
    color: theme.colors.gray[100],
    padding: 12,
    paddingVertical: 16,
    alignItems: "center",
  },
});
