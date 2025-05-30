import PostListItem from "@/components/PostListItem";
import { fetchPosts } from "@/services/posts";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, Text } from "react-native";

export default function HomeScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
}
