import { Text, View } from "../../components/Themed";

import tw from "twrnc";

export default function PreferencesScreen() {
  return (
    <View style={tw`flex-1 items-start justify-start p-10`}>
      <Text style={tw`text-lg font-bold`}>Preferences</Text>
      <Text style={tw`text-md`}>Wolf</Text>
      <Text style={tw`text-md`}>Nassau</Text>
    </View>
  );
}
