import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-lg font-bold text-red-300`}>Homepage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
