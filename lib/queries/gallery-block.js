import { groq } from 'next-sanity';

const imageBlock = `_id,title,images`;

export default groq`*[_type == "rs_pictures_block"][]{${imageBlock}}`;
