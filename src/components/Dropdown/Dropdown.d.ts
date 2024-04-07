interface DropdownChoice {
  label: string;
  value: string;
  icon?: () => React.JSX.Element;
}

interface DropdownProps {
  choices: DropdownChoice[];
  value: DropdownChoice;
  onChange: React.Dispatch<React.SetStateAction<any>>;
  render: (v: DropdownChoice) => React.ReactElement;
  style?: StyleProp<ViewStyle>;
}

interface DropdownItemProps {
  selected?: boolean;
  label: string;
  icon?: () => React.JSX.Element;
}
