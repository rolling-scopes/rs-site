import { groq } from 'next-sanity';

const socialItem = `
_id,
name,
icon,
social_item_link
`;

export const socialNetworksListQuery = groq`*[_type == "social_link_list"][]{${socialItem}}`;

export default socialNetworksListQuery;
