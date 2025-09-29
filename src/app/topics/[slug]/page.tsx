import PostCreateForm from "@/components/posts/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostByTopicSlub } from "@/db/queries/posts";

interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = await params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchPosts={() => fetchPostByTopicSlub(slug)}></PostList>
      </div>

      <div>
        <PostCreateForm slug={slug}></PostCreateForm>
      </div>
    </div>
  );
}
