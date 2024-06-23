export const runtime = 'edge';
import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-components";

interface PostPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromSlug(slug: string) {
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

// 只生成特定 slug 的静态路径 测试
export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return [
    { slug: 'rag-text-splitter' }
  ];
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const post = await getPostFromSlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}
