import { Text, View } from "../../components/Themed";

import tw from "twrnc";

export default function GamesScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-lg font-bold text-red-300`}>Games</Text>
    </View>
  );
}
