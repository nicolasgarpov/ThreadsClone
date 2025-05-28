import PostListItem from "@/components/PostListItem";
import { Posts } from "@/data";
import { FlatList } from "react-native";

export default function HomeScreen() {
  return (
    <FlatList
      data={Posts}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
