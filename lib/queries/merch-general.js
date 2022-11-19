import { groq } from 'next-sanity';

const merchGeneralItem = `
_id,
title,
description,
titleLink,
link
`;

export const merchGeneralQuery = groq`*[_type == "merch_general"][]{${merchGeneralItem}}`;

export default merchGeneralQuery;
