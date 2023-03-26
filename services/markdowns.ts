import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs/promises';
import path from 'path';
import { Paths } from '@/common/enums/paths';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist';

type Title = { title: Buffer };

type Content = { content: Buffer };

type Data = Partial<Title & Content>;

type PostSourceFile = Title | Content;

type PostData = PostSourceFile[];

async function getFileSource(folderPath: string, filename: string) {
  const filePath = path.join(folderPath, filename);
  const source = await fs.readFile(filePath);
  const nameOfFile = path.parse(filename).name;

  return { [nameOfFile]: source } as PostSourceFile;
}

async function transformPostData(post: PostData): Promise<{
  title: MDXRemoteSerializeResult;
  content: MDXRemoteSerializeResult;
}> {
  const postData: Data = { ...post[0], ...post[1] };
  const serializedTitle = await serialize(postData?.title?.toString());
  const serializedContent = await serialize(postData?.content?.toString());

  return {
    title: serializedTitle,
    content: serializedContent
  };
}

async function getPostFromFolderName(folderName: string) {
  const { MARKDOWNS_PATH, FAQ_PATH } = Paths;
  const folderPath = path.join(MARKDOWNS_PATH, FAQ_PATH, folderName);
  const fileNames = await fs.readdir(folderPath);
  const getFileSourcePromises = fileNames.map(filename =>
    getFileSource(folderPath, filename)
  );
  const postData: PostData = await Promise.all(getFileSourcePromises);
  return transformPostData(postData);
}

export async function getFAQMarkdowns() {
  const { MARKDOWNS_PATH, FAQ_PATH } = Paths;
  const faqPath = path.join(MARKDOWNS_PATH, FAQ_PATH);
  const folderNames = await fs.readdir(faqPath);
  const getPostFromFolderNamePromises = folderNames.map(folderName =>
    getPostFromFolderName(folderName)
  );
  return Promise.all(getPostFromFolderNamePromises);
}
