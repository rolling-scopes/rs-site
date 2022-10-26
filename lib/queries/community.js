import { groq } from 'next-sanity';

const communityItem = `
_id,
title,
description,
picture
`;

export const communityQuery = groq`*[_type == "community"][]{${communityItem}}`;

export default communityQuery;
