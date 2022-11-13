import { serialize } from 'next-mdx-remote/serialize';
import { AccordionItem, Data, PostData } from './types';

export async function transformPostData(
  post: PostData
): Promise<AccordionItem> {
  const postData: Data = { ...post[0], ...post[1] };
  const serializedTitle = await serialize(postData?.title?.toString());
  const serializedContent = await serialize(postData?.content?.toString());

  return {
    title: serializedTitle,
    content: serializedContent
  };
}
