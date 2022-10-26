import { groq } from 'next-sanity';

const donationItem = `
_id,
title,
description,
titleLink,
link
`;

export const donationV1Query = groq`*[_type == "donation-v1"][]{${donationItem}}`;

export default donationV1Query;
