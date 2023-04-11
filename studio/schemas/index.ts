import { alumniCompanies } from './alumni-companies';
import { author } from './author';
import { community } from './community';
import { donationV1 } from './donation-v1';
import { donationV2 } from './donation-v2';
import { merchGeneral } from './merch-general';
import { partners } from './partners';
import { post } from './post';
import { speakers } from './speakers';
import { socialMedia } from './social-media';
import { picturesBlock } from './pictures-block';

export const schemaTypes = [
  // Document types
  alumniCompanies,
  author,
  post,

  // Other types
  community,
  donationV1,
  donationV2,
  merchGeneral,
  partners,
  speakers,
  socialMedia,
  picturesBlock
];
