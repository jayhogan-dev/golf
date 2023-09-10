import { View, Text } from "react-native";

import tw from "twrnc";

export default function NotificationsScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-lg font-bold text-red-300`}>Notification Page</Text>
    </View>
  );
}
