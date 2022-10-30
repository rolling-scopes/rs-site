import { serialize } from 'next-mdx-remote/serialize';
import { PostData } from './types';

export async function transformPostData(post: PostData) {
  const postData = { ...post[0], ...post[1] };
  const serializedTitle = await serialize(postData.title?.toString());
  const serializedContent = await serialize(postData.content?.toString());

  return {
    title: serializedTitle,
    content: serializedContent
  };
}
