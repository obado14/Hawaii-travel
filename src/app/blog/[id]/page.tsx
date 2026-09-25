import { notFound } from "next/navigation";
import { posts } from "@/data/blog-posts";
import { BlogPostDetailClient } from "./blog-post-detail-client";

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return <BlogPostDetailClient post={post} />;
}
