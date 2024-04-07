import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Dropdown as DP } from "react-native-element-dropdown";

import { styles } from "./styles";
import { theme } from "@/styles/theme";

const Dropdown = ({
  style,
  choices,
  value,
  onChange,
  render,
}: DropdownProps) => {
  return (
    <DP
      style={[styles.dropdown, style]}
      selectedTextStyle={styles.dropdowSelected}
      containerStyle={styles.dropdowContainer}
      iconColor={theme.colors.purple[500]}
      data={choices}
      labelField="label"
      autoScroll={false}
      showsVerticalScrollIndicator={false}
      valueField="value"
      value={value}
      onChange={onChange}
      renderItem={render}
    />
  );
};

const DropdownItem = ({ label, icon, selected }: DropdownItemProps) => {
  return (
    <View
      style={[styles.dropDownItem, selected && styles.dropDownItemSelected]}
    >
      {icon && icon()}
      <Text style={[styles.dropDownItemLabel]}>{label}</Text>
      {selected && (
        <Feather name="check" color={theme.colors.purple[500]} size={12} />
      )}
    </View>
  );
};

Dropdown.Item = DropdownItem;

export { Dropdown };
