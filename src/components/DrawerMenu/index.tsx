import { useEffect, useState } from "react";
import {
  Modal,
  ModalProps,
  TouchableOpacityProps,
  ViewProps,
  TouchableOpacity,
  Text,
  TextProps,
} from "react-native";

import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";

import { styles } from "./styles";

interface DrawerMenuProps extends ModalProps {
  onBackdropClick?: () => void;
}

const DrawerMenu = ({
  onBackdropClick,
  visible,
  children,
  ...props
}: DrawerMenuProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (visible) {
      setOpen(true);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  }, [visible]);

  return (
    <Modal transparent {...props} statusBarTranslucent visible={open}>
      <Backdrop onPress={() => onBackdropClick && onBackdropClick()} />
      {visible && children}
    </Modal>
  );
};

const Backdrop = ({ style, ...props }: TouchableOpacityProps) => (
  <TouchableOpacity style={styles.backdrop} {...props} activeOpacity={0.9} />
);

const Content = ({ style, ...props }: ViewProps) => (
  <Animated.View
    entering={SlideInRight}
    exiting={SlideOutRight}
    style={[styles.content, style]}
    {...props}
  />
);

const Title = ({
  style,
  subtitle,
  ...props
}: TextProps & { subtitle?: boolean }) => (
  <Text style={[styles.title, subtitle && styles.subtitle, style]} {...props} />
);

const Item = ({ style, ...props }: TouchableOpacityProps) => (
  <TouchableOpacity
    style={[styles.item, style]}
    activeOpacity={0.8}
    {...props}
  />
);

DrawerMenu.Backdrop = Backdrop;
DrawerMenu.Content = Content;
DrawerMenu.Title = Title;
DrawerMenu.Item = Item;

export { DrawerMenu };
