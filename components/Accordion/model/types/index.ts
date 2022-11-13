import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist';

export type AccordionItem = {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  title: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};

type Title = { title: Buffer };

type Content = { content: Buffer };

export type Data = Partial<Title & Content>;

export type PostSourceFile = Title | Content;

export type PostData = PostSourceFile[];