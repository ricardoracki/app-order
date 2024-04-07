import {
  ImageBackground as RNImageBackground,
  ImageBackgroundProps as RNImageBackgroundProps,
} from "react-native";
import { styles } from "./styles";

export function ImageBackground({
  style,
  ...props
}: RNImageBackgroundProps & ImageBackgroundProps) {
  return (
    <RNImageBackground
      {...props}
      style={[styles.image, style]}
      resizeMode="stretch"
    />
  );
}
