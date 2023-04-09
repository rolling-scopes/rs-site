import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { resolveProductionUrl } from './resolveProductionUrl';
import { schemaTypes } from './schemas';

const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/',
  title: 'rs-cms',

  projectId: projectId || '',
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes
  }
});
