import fs from 'fs/promises';
import path from 'path';
import { AccordionItem } from './types';
import config from './config';
import { getPostFromFolderName } from './get-post-from-folder-name';

export async function getFAQMarkdowns() {
  const { MARKDOWNS_PATH, FAQ_PATH } = config;
  const faqPath = path.join(MARKDOWNS_PATH, FAQ_PATH);
  const folderNames = await fs.readdir(faqPath);
  const getPostFromFolderNamePromises = folderNames.map(
    folderName =>
      new Promise(resolve => {
        resolve(getPostFromFolderName(folderName));
      })
  );
  const posts = (await Promise.all(
    getPostFromFolderNamePromises
  )) as AccordionItem[];

  return posts;
}
