import Link from "next/link";
import { defineQuery, type SanityDocument } from "next-sanity";
import type { FC } from "react";

import { client } from "@/sanity/client";

const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt
  }`,
);

const options = { next: { revalidate: 30 } };

const PostsPage: FC = async () => {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          Sanity
        </p>
        <h1 className="text-3xl font-semibold">Posts</h1>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted-foreground">
          No posts yet. Add one in the Studio at{" "}
          <Link href="http://localhost:3333" className="underline">
            localhost:3333
          </Link>
          .
        </p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => {
            const slug = (post.slug as { current?: string })?.current;

            return (
              <li key={post._id} className="border-b border-border pb-6">
                <Link href={`/posts/${slug}`} className="group block space-y-2">
                  <h2 className="text-xl font-medium group-hover:underline">
                    {post.title as string}
                  </h2>
                  {typeof post.excerpt === "string" ? (
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default PostsPage;
