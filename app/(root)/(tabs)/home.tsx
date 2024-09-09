import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const { user } = useUser();

  return (
    <SafeAreaView className="bg-general-500">
      <FlatList data={[]} />
    </SafeAreaView>
  );
}
