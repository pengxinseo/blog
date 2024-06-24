"use client";
export const runtime = 'edge';
import posts from "../../../../db/posts.json"; // 导入 JSON 数据
import MdxRenderer from '@/components/MdxRenderer';
export default function Post() {
  // 这里假设 slug 是从 URL 参数中获取的
  const slug = "advanced-techniques-for-cms-security";

  // 根据 slug 查找文章
  const post = posts.find((p) => p.slug === slug);

  // 如果没有找到对应的文章，返回一个错误提示
  if (!post) {
    return <div>文章未找到</div>;
  }

  // 渲染文章内容
  return (
    <div className='p-32'>
      <time className="block italic text-gray-500">{post.date}</time>
      <h1 className="text-4xl font-bold pb-6 border-b mb-10">
        {post.title}
      </h1>
      <MdxRenderer source={post.content}></MdxRenderer>
    </div>
  );
}
