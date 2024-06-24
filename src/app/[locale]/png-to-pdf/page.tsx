import PageComponent from "./PageComponent";
import { queryPostBySlug } from '../../../../db/queries';
import MdxRenderer from '@/components/MdxRenderer';

export default async function IndexPage({ params: { locale = '' } }) {
  const post:any = await queryPostBySlug('advanced-techniques-for-cms-security');

  const renderedContent = <MdxRenderer source={post.content} />;

  return (
    <PageComponent
      locale={locale}
      indexLanguageText={'牛逼'}
      post={post}
      renderedContent={renderedContent}
    />
  );
}
