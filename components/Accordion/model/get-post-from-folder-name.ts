import fs from 'fs/promises';
import path from 'path';
import config from './config';
import { getFileSource } from './get-file-source';
import { transformPostData } from './transform-post-data';
import { PostData } from './types';

export async function getPostFromFolderName(folderName: string) {
  const { MARKDOWNS_PATH, FAQ_PATH } = config;
  const folderPath = path.join(MARKDOWNS_PATH, FAQ_PATH, folderName);
  const fileNames = await fs.readdir(folderPath);
  const getFileSourcePromises = fileNames.map(filename =>
    getFileSource(folderPath, filename)
  );
  const postData: PostData = await Promise.all(getFileSourcePromises);
  const transformed = await transformPostData(postData);

  return transformed;
}
