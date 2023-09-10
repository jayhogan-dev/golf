import { View, Text } from "react-native";
import React from "react";

import tw from "twrnc";

export default function GroupsScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-lg font-bold text-red-300`}>Groups</Text>
    </View>
  );
}
