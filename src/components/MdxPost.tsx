import React from 'react';
import Markdown from 'markdown-to-jsx';
import MdxAlert from '@/components/markdown/MdxAlert';
import MdxBlockquote from '@/components/markdown/MdxBlockquote';
import { notFound } from 'next/navigation';
import postsEn from '@root/content/en.json';
import postsZh from '@root/content/zh.json';
import postsKo from '@root/content/ko.json';
import postsJa from '@root/content/ja.json';
import postsTw from '@root/content/tw.json';
import postsPt from '@root/content/pt.json';
import postsEs from '@root/content/es.json';
import postsDe from '@root/content/de.json';
import postsFr from '@root/content/fr.json';
import postsVi from '@root/content/vi.json';
import postsRu from '@root/content/ru.json';
import postsAr from '@root/content/ar.json';

const markdownOptions = {
    //添加一些自定义的组件
    overrides: {
        MdxAlert: { component: MdxAlert },
        MdxBlockquote: { component: MdxBlockquote }
    }
};

const getPostByLocaleAndSlug = (locale: string, slug: string) => {

    const postsByLocale = {
        en: postsEn,
        zh: postsZh,
        ko: postsKo,
        ja: postsJa,
        tw: postsTw,
        pt: postsPt,
        es: postsEs,
        de: postsDe,
        fr: postsFr,
        vi: postsVi,
        ru: postsRu,
        ar: postsAr,
    } as any;

    const posts = postsByLocale[locale];
    if (!posts) {
        notFound(); 
    }
    const post = posts.find((p:any) => p.slug === slug);
    if (!post) {
        notFound(); 
    }
    return post;
};

const Post = ({ locale, slug }: { locale: string, slug: string }) => {
    const post = getPostByLocaleAndSlug(locale, slug);

    if (!post) {
        notFound();
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
};

export default Post;