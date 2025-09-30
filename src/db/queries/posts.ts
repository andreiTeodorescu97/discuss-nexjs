import type { Post } from "@prisma/client";
import { db } from "@/db";

export type PostWithData = Post & {
  topic: { slug: string };
  user: { name: string | null };
  _count: { comments: number };
};
// export type PostWithData = Awaited<ReturnType<typeof fetchPostByTopicSlub>>[number];

export function fetchPostByTopicSlub(slug: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { topic: { slug: slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}

export function fetchTopPosts(): Promise<PostWithData[]> {
  return db.post.findMany({
    take: 5,
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
    orderBy: { comments: { _count: "desc" } },
  });
}

export function searchPosts(term: string): Promise<PostWithData[]> {
  return db.post.findMany({
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
    where: {
      OR: [{ title: { contains: term } }, { content: { contains: term } }],
    },
    orderBy: { createdAt: "desc" },
  });
}
