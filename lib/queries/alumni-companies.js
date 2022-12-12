import { groq } from 'next-sanity';

export const socialNetworksListQuery = groq`*[_type == "alumni-companies"][]`;

export default socialNetworksListQuery;