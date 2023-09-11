import { Text, View } from "react-native";
import tw from "twrnc";
import { User } from "../types";

interface PreferenceItemProps {
  user: User;
}

export default function PreferenceItem({ user }: PreferenceItemProps) {
  return (
    <View style={tw`h-fit w-full p-3`}>
      <Text style={tw`text-white`}>Do you play games on the course?</Text>
      <Text style={tw`text-white`}>
        {user.preferences.playsGames ? "Yes" : "No"}
      </Text>
      <Text style={tw`text-white`}>Preferred Games</Text>
      <View style={tw`flex flex-row flex-wrap gap-4 gap-y-2`}>
        {user.preferences.preferredGames?.map((game, index) => (
          <View style={tw`px-6 py-2 bg-cyan-700 rounded-lg items-center`}>
            <Text
              key={index}
              style={tw`text-white`}
            >
              {game}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
