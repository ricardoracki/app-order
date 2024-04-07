import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 12,
    color: theme.colors.gray[200],
    paddingVertical: 6,
  },
  input: {
    maxHeight: 50,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: theme.colors.gray[300],
    padding: 12,
    backgroundColor: theme.colors.gray[500],
    color: theme.colors.gray[100],
  },
  dropdownInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownInput: {
    width: 66,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  dropdownInputDropdown: {
    width: 72,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: theme.colors.purple[500],
  },
});
