export const runtime = 'edge';
import PageComponent from "./PageComponent";
import { queryPostBySlug } from '../../../../db/queries';

export default async function IndexPage({params: {locale = ''}}) {

  const post = await queryPostBySlug('advanced-techniques-for-cms-security');

  return (
    <PageComponent
      locale={locale}
      indexLanguageText={'牛逼'}
      post={post}
    >
    </PageComponent>
  )
}