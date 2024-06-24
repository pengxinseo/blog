"use client";
export const runtime = 'edge';
const PageComponent = ({
  locale,
  indexLanguageText,
  post,
  renderedContent
}: { locale: any; indexLanguageText: any; post: any, renderedContent: any }) => {
  if (!post) {
    return <div>文章未找到</div>;
  }

  return (
    <div className='p-32'>
      <time className="block italic text-gray-500">{post.date}</time>
      <h1 className="text-4xl font-bold pb-6 border-b mb-10">
        {post.title}
      </h1>
      {renderedContent}
    </div>
  );
};

export default PageComponent;
