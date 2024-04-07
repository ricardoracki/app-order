import { TextProps } from "react-native";

import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";

import { styles } from "./styles";

const Status = ({ style, ...props }: TextProps) => (
  <Animated.Text
    entering={SlideInDown}
    exiting={SlideOutDown}
    style={styles.message}
    {...props}
  />
);

export { Status };
