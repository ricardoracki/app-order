import { Platform, ToastAndroid } from "react-native";

export function toast(message: string) {
  if (Platform.OS !== "android")
    return console.log(`Toast not implemented in ${Platform.OS} os`);

  return ToastAndroid.show(message, ToastAndroid.SHORT);
}
