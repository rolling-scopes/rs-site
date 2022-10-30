import fs from 'fs/promises';
import path from 'path';
import { PostSourceFile } from './types';

export async function getFileSource(folderPath: string, filename: string) {
  const filePath = path.join(folderPath, filename);
  const source = await fs.readFile(filePath);
  const nameOfFile = path.parse(filename).name;

  return { [nameOfFile]: source } as PostSourceFile;
}
