import { groq } from 'next-sanity';

const speakersItem = `
_id,
title,
description,
titleLink,
link
`;

export const speakersQuery = groq`*[_type == "speakers"][]{${speakersItem}}`;

export default speakersQuery;
