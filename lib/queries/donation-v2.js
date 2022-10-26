import { groq } from 'next-sanity';

const donationItem = `
_id,
title,
description,
titleLink,
link,
picture
`;

export const donationV2Query = groq`*[_type == "donation-v2"][]{${donationItem}}`;

export default donationV2Query;
