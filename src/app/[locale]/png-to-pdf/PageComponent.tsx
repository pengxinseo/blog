export const runtime = 'edge';
import MdxRenderer from '@/components/MdxRenderer';
import { notFound } from 'next/navigation';

const PageComponent = ({
  locale,
  indexLanguageText,
  post
}: { locale: any; indexLanguageText: any; post: any }) => {

  return (
    <div className='p-32'>
      <time className="block italic text-gray-500">2025-8-80</time>
      <h1 className="text-4xl font-bold pb-6 border-b mb-10">
        {post.title}
      </h1>
      <MdxRenderer source={post.content}></MdxRenderer>
    </div>
  );
};


export default PageComponent;

