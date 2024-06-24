import PageComponent from "./PageComponent";
import { queryPostBySlug } from '../../../../db/queries';
export const runtime = 'edge';
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