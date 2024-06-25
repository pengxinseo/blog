import React from 'react';
import Markdown from 'markdown-to-jsx';
import MdxAlert from '@/components/markdown/MdxAlert';
import MdxBlockquote from '@/components/markdown/MdxBlockquote';
import Toc from './Toc';
import dayjs from 'dayjs';
import 'dayjs/locale/en'; // 英文
import 'dayjs/locale/zh'; // 中文
import 'dayjs/locale/ko'; // 韩文
import 'dayjs/locale/zh-tw';//台湾
import 'dayjs/locale/ja'; // 日文
import 'dayjs/locale/pt'; // 葡萄牙语
import 'dayjs/locale/es'; // 西班牙语
import 'dayjs/locale/de'; // 德语
import 'dayjs/locale/fr'; // 法语
import 'dayjs/locale/vi'; // 越南语
import 'dayjs/locale/ru'; // 俄语
import 'dayjs/locale/ar';
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
import Code from './markdown/Code';

const markdownOptions = {
    //添加一些自定义的组件
    overrides: {
        MdxAlert: { component: MdxAlert },
        MdxBlockquote: { component: MdxBlockquote },
        Code: {component: Code}
    },
    slugify: (str:any) => {
        return str;
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
    const post = posts.find((p: any) => p.slug === slug);
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

    if(locale == 'tw'){
        dayjs.locale('zh-tw');
    }else{
        dayjs.locale(locale);
    }
    const postAddTime = dayjs(post.date).format('MMMM D, YYYY');
    return (
        <div className='px-4 mx-auto max-w-7xl mt-20 sm:px-6 lg:px-8'>
            <div className='markdown flex flex-col md:flex-row'>
                <div className='w-full md:w-8/12 md:order-first'>
                    <h1 className="text-4xl font-bold pb-6 border-b mb-10">
                        {post.title}
                    </h1>
                    <span>文章发布于:</span>
                    <time className="block italic text-gray-500">{postAddTime}</time>
                    <Markdown options={markdownOptions}>{post.content}</Markdown>
                </div>
                <div className=' w-full md:w-4/12 sticky top-20'>
                    <Toc />
                </div>
            </div>
        </div>

    );
};

export default Post;
