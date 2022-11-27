import { groq } from 'next-sanity';

const socialItem = `_id,social_media_list`;

export const socialMediaQuery = groq`*[_type == "social_media"][]{${socialItem}}`;

export default socialMediaQuery;
