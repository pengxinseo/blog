import PageComponent from "./PageComponent";
import { queryPostBySlug } from '../../../../db/queries';
import MdxRenderer from '@/components/MdxRenderer';
import {unstable_setRequestLocale} from 'next-intl/server';
export const runtime = 'edge';
export default async function IndexPage({ params: { locale = '' } }) {
  unstable_setRequestLocale(locale);
  const post:any = await queryPostBySlug('advanced-techniques-for-cms-security');

  const renderedContent = <MdxRenderer source={post.content} />;

  return (
    <PageComponent
      locale={locale}
      indexLanguageText={'牛逼'}
      renderedContent={renderedContent}
    />
  );
}
