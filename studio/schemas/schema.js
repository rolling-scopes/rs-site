// First, we must import the schema creator
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
// import blockContent from './blockContent'
import post from './post';
import author from './author';
import socialMedia from './social-media';
import donationV1 from './donation-v1';
import donationV2 from './donation-v2';
import speakers from './speakers';
import community from './community';
import partners from './partners';
import merchGeneral from './merch-general';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    post,
    author,
    socialMedia,
    donationV1,
    donationV2,
    speakers,
    community,
    partners,
    merchGeneral
  ])
});
