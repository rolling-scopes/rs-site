import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type ArrayAlumniCompanies = {
  _key: string;
  name: string;
  picture: SanityImageObject;
};

export type AlumniCompaniesFetchT = {
  _id: string;
  companies: Array<ArrayAlumniCompanies>;
};

export type AlumniCompaniesP = {
  companies: Array<ArrayAlumniCompanies>;
};
