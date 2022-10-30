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

export type PostData = [{ title: Buffer }, { content: Buffer }];

export type PostSourceFile = { title: Buffer } | { content: Buffer };
