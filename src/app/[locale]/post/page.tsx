
export const runtime = 'edge';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import MdxAlert from '@/components/markdown/MdxAlert';
import MdxBlockquote from '@/components/markdown/MdxBlockquote';

import postsEn from '../../../../content/en.json';
import postsJa from '../../../../content/ja.json';

const MyCustomComponent = ({ prop1, prop2 }:{prop1:any,prop2:any}) => {
  return (
    <div className='text-red-800'>
      Custom Component: {prop1}, {prop2}
    </div>
  );
};

const markdownOptions = {
  overrides: {
    MyCustomComponent: { component: MyCustomComponent },
    MdxAlert: { component: MdxAlert },
    MdxBlockquote: {component:MdxBlockquote}
  }
};

export default function Post({params: {locale = ''}}) {
  const slug = "demo";
  let post;
  if (locale === 'ja') {
    post = postsJa.find((p) => p.slug === slug);
  } else {
    post = postsEn.find((p) => p.slug === slug);
  }
  
  if (!post) {
    return <div>文章未找到</div>;
  }

  return (
    <div className='p-32 markdown'>
      <time className="block italic text-gray-500">{post.date}</time>
      <h1 className="text-4xl font-bold pb-6 border-b mb-10">
        {post.title}
      </h1>
      <Markdown options={markdownOptions}>{post.content}</Markdown>
    </div>
  );
}
