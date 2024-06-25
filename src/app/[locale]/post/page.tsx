
export const runtime = 'edge';
import posts from "../../../../db/posts.json"; // 导入 JSON 数据

import { SafeMdxRenderer } from 'safe-mdx'

export default function Post() {

  const slug = "advanced-techniques-for-cms-security";
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return <div>文章未找到</div>;
  }

  // 渲染文章内容
  return (
    <div className='p-32 markdown' >
      <time className="block italic text-gray-500">{post.date}</time>
      <h1 className="text-4xl font-bold pb-6 border-b mb-10">
        {post.title}
      </h1>
      <SafeMdxRenderer code={post.content} components={{ Heading: CustomHeadingComponent }} />

    </div>
  );
}

function CustomHeadingComponent({ children }:{children:any}) {
  return <h2 style={{ color: 'blue' }}>{children}</h2>;
}
