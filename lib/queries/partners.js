import { groq } from 'next-sanity';

const partnersItem = `
_id,
title,
companies
`;

export const partnersQuery = groq`*[_type == "partners"][]{${partnersItem}}`;

export default partnersQuery;
