import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { searchPosts } from "@/db/queries/posts";

interface SearchPageProps {
  searchParams: Promise<{
    term: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = await searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div className="p-4">
  <h1 className="text-2xl mb-4">Search Results for &quot;{term}&quot;</h1>
      <PostList fetchPosts={() => searchPosts(term)} />
    </div>
  );
}
