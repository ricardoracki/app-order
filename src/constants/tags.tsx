import { theme } from "@/styles/theme";

import {
  Milk,
  Beef,
  Apple,
  Sandwich,
  Utensils,
  Bean,
  Candy,
  PawPrint,
  Paintbrush,
  BadgeHelp,
} from "lucide-react-native";

interface Tag {
  label: string;
  value: string;
  layerColor: string;
  icon: () => React.JSX.Element;
}

export const TAGS: Tag[] = [
  {
    label: "Padaria",
    value: "padaria",
    layerColor: theme.colors.yellow[900],
    icon: () => <Sandwich size={18} color={theme.colors.yellow[500]} />,
  },

  {
    label: "Carne",
    value: "carne",
    layerColor: theme.colors.pink[900],
    icon: () => <Beef size={18} color={theme.colors.pink[500]} />,
  },
  {
    label: "Fruta/Legume",
    value: "fruta",
    layerColor: theme.colors.orange[900],
    icon: () => <Apple size={18} color={theme.colors.orange[500]} />,
  },
  {
    label: "Bebida",
    value: "bebida",
    layerColor: theme.colors.blue[900],
    icon: () => <Milk size={18} color={theme.colors.blue[500]} />,
  },
  {
    label: "Comida",
    value: "comida",
    layerColor: theme.colors.orange[900],
    icon: () => <Bean size={18} color={theme.colors.orange[500]} />,
  },
  {
    label: "Doce",
    value: "doce",
    layerColor: theme.colors.blue[900],
    icon: () => <Candy size={18} color={theme.colors.blue[500]} />,
  },
  {
    label: "Bazar",
    value: "bazar",
    layerColor: theme.colors.green[900],
    icon: () => <Utensils size={18} color={theme.colors.green[500]} />,
  },
  {
    label: "Pet",
    value: "pet",
    layerColor: theme.colors.pink[900],
    icon: () => <PawPrint size={18} color={theme.colors.pink[500]} />,
  },
  {
    label: "Limpeza/Higiene",
    value: "limpeza",
    layerColor: theme.colors.yellow[900],
    icon: () => <Paintbrush size={18} color={theme.colors.yellow[500]} />,
  },
  {
    label: "Outra",
    value: "outros",
    layerColor: theme.colors.green[900],
    icon: () => <BadgeHelp size={18} color={theme.colors.green[500]} />,
  },
];
