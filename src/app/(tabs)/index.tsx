import PostListItem from "@/components/PostListItem";
import { Posts } from "@/data";
import { Link } from "expo-router";
import { FlatList } from "react-native";

export default function HomeScreen() {
  return (
    <FlatList
      data={Posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      ListHeaderComponent={() => (
        <>
          <Link href="/new" className=" p-4 text-center text-3xl">
            New Post
          </Link>
          <Link href="/new" className=" p-4 text-center text-3xl">
            New Post
          </Link>
        </>
      )}
    />
  );
}
