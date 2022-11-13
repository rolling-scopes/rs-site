import fs from 'fs/promises';
import path from 'path';
import config from './config';
import { getPostFromFolderName } from './get-post-from-folder-name';

export async function getFAQMarkdowns() {
  const { MARKDOWNS_PATH, FAQ_PATH } = config;
  const faqPath = path.join(MARKDOWNS_PATH, FAQ_PATH);
  const folderNames = await fs.readdir(faqPath);
  const getPostFromFolderNamePromises = folderNames.map(folderName =>
    getPostFromFolderName(folderName)
  );
  const posts = await Promise.all(getPostFromFolderNamePromises);

  return posts;
}
