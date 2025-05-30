import { schedulePushNotification } from "@/providers/NotificationsProvider";
import { Text } from "react-native";

export default function NotificationsScreen() {
  return (
    <Text onPress={schedulePushNotification} className="text-white">
      Test notification
    </Text>
  );
}
