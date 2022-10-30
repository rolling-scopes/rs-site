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
  const getFileSourcePromises = fileNames.map(
    filename =>
      new Promise(resolve => {
        resolve(getFileSource(folderPath, filename));
      })
  );
  const postData = (await Promise.all(getFileSourcePromises)) as PostData;
  const transformed = await transformPostData(postData);

  return transformed;
}
