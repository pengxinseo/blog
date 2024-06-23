import { notFound } from 'next/navigation';
import { queryAllPosts,queryPostBySlug  } from '../../../../../db/queries';
import MdxRenderer from '@/components/MdxRenderer';

type Props = {
  params: { slug: string };
}

export async function generateStaticParams() {
  return queryAllPosts();
}

export default async function Post(props: Readonly<Props>) {
  const { params: { slug } } = props
  const post = await queryPostBySlug(slug);
  const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "full" })

  if (!post) {
    notFound()
  }

  return (
    <div className='p-32'>
      <time className="block italic text-gray-500">{dateFormatter.format(new Date(post.date))}</time>
      <h1 className="text-4xl font-bold pb-6 border-b mb-10">
        {post.title} 
      </h1>
      <MdxRenderer source={post.content}></MdxRenderer>
    </div>
  )
}