import { groq } from 'next-sanity';

const socialItem = `
_id,
social_name,
social_item_link
`;

export const socialNetworksListQuery = groq`*[_type == "social_link"][]{${socialItem}}`;

export default socialNetworksListQuery;
