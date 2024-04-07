import { View, ViewProps } from "react-native";
import { styles } from "./styles";

const Badge = ({ style, ...props }: ViewProps) => (
  <View style={[styles.container, style]} {...props} />
);

export { Badge };
