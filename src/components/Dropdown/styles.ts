import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 179,
    padding: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.gray[500],
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
  },
  dropdowContainer: {
    backgroundColor: theme.colors.gray[300],
    borderRadius: 12,
    borderColor: theme.colors.gray[300],
    overflow: "hidden",
  },
  dropdowSelected: {
    fontSize: 12,
    color: theme.colors.gray[200],
  },
  dropDownItem: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    gap: 6,
    backgroundColor: theme.colors.gray[500],
  },
  dropDownItemLabel: {
    fontSize: 12,
    flex: 1,
    color: theme.colors.gray[200],
  },
  dropDownItemSelected: {
    backgroundColor: theme.colors.gray[300],
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
