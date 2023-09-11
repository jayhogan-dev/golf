import PreferenceItem from "../../components/PreferenceItem";
import { View } from "../../components/Themed";

import tw from "twrnc";

import user from "../../assets/data/user.json";

export default function PreferencesScreen() {
  return (
    <View style={tw`flex-1 items-start justify-start p-5`}>
      <PreferenceItem user={user} />
    </View>
  );
}
