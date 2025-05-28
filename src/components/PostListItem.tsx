import { Post } from "@/types";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";

export default function PostListItem({ post }: { post: Post }) {
  return (
    <View className="flex-row p-4 border-b border-gray-800">
      {/*User Avatar */}
      <View className="mr-3">
        <Image
          source={{ uri: post.user.image }}
          className="w-12 h-12 rounded-full"
        />
      </View>
      <View className="flex-1">
        <Text className="font-bold text-white">{post.user.name}</Text>
        <Text className="text-gray-400">@{post.user.username}</Text>
        <Text className="text-white mt-2">{post.content}</Text>
        {/* Interaction Buttons */}
        <View className="flex-row gap-4 mt-2">
          <Pressable className="flex-row items-center">
            <Ionicons name="heart-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2"></Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="repeat-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </Pressable>

          <Pressable>
            <Ionicons name="paper-plane-outline" size={20} color="#d1d5db" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
