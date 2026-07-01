import { notFound } from "next/navigation";
import { defineQuery, PortableText, type SanityDocument } from "next-sanity";
import type { FC } from "react";

import { client } from "@/sanity/client";

const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    body,
    publishedAt
  }`,
);

const options = { next: { revalidate: 30 } };

const PostPage: FC<{ params: Promise<{ slug: string }> }> = async ({
  params,
}) => {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument | null>(
    POST_QUERY,
    { slug },
    options,
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <article className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">{post.title as string}</h1>
          {typeof post.publishedAt === "string" ? (
            <p className="text-sm text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          ) : null}
        </header>
        {Array.isArray(post.body) ? (
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <PortableText value={post.body} />
          </div>
        ) : null}
      </article>
    </main>
  );
};

export default PostPage;
