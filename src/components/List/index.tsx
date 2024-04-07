import { FlatListProps, Text, View, useWindowDimensions } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Animated, {
  LinearTransition,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  FlatList,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";

import { styles } from "./style";
import { theme } from "@/styles/theme";

import { TAGS } from "@/constants/tags";
import { Badge } from "@/components/Badge";
import { Checkbox } from "@/components/Checkbox";

const List = ({ contentContainerStyle, ...props }: FlatListProps<any>) => (
  <FlatList
    showsVerticalScrollIndicator={false}
    horizontal={false}
    contentContainerStyle={[styles.listContainer, contentContainerStyle]}
    {...props}
  />
);

const ListItem = ({
  mark,
  setMark,
  description,
  tagValue,
  title,
  handleMenuPress,
  handleItemRemove,
}: ListItemProps) => {
  const OVERDRAG = -117; // Constante de deslocamento para remover item
  const MAX_DISPLACEMENT_X = 7; // Constante de filtro para desativar scroll horizontal

  const tag = TAGS.find((t) => t.value == tagValue);

  const translateX = useSharedValue(0);
  const dimensions = useWindowDimensions();

  const initialScrollX = useSharedValue(0);
  const pan = Gesture.Pan()
    .manualActivation(true)
    .onBegin((event) => {
      initialScrollX.value = event.absoluteX;
    })
    .onTouchesMove((event, state) => {
      const displacementX = Math.abs(
        initialScrollX.value - event.changedTouches[0].absoluteX
      );
      if (displacementX > MAX_DISPLACEMENT_X) state.activate();
    })
    .onUpdate((event) => {
      if (event.translationX < 0 && event.absoluteX > OVERDRAG) {
        translateX.value = event.translationX;
      }
    })
    .onFinalize(() => {
      if (translateX.value <= OVERDRAG) {
        translateX.value = withTiming(
          dimensions.width * -1,
          undefined,
          (finished) => {
            if (finished) {
              runOnJS(handleItemRemove)();
            }
          }
        );
      } else {
        translateX.value = withTiming(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const nativeGesture = Gesture.Native();

  const composedGestures = Gesture.Simultaneous(nativeGesture, pan);

  return (
    <GestureDetector gesture={composedGestures}>
      <Animated.View
        style={[styles.container, mark && styles.marked, animatedStyle]}
        // exiting={FadeOut}
        // entering={FadeIn}
        layout={LinearTransition.springify(15).duration(10000)}
      >
        <Checkbox
          onChangeValue={(v) => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            setMark(v);
          }}
          value={mark}
        />
        <View style={styles.content}>
          <Text style={[styles.title, mark && styles.titleMarked]}>
            {title}
          </Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <Badge style={{ backgroundColor: tag?.layerColor }}>
          {tag!.icon()}
        </Badge>
        <MaterialCommunityIcons
          onPress={() => handleMenuPress && handleMenuPress()}
          name="dots-vertical"
          size={24}
          color={theme.colors.purple[500]}
        />
      </Animated.View>
    </GestureDetector>
  );
};

List.Item = ListItem;

export { List };
