interface ListItemProps {
  mark: boolean;
  setMark: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  tagValue: string;
  handleMenuPress?: () => void;
  handleItemRemove: () => void;
}
