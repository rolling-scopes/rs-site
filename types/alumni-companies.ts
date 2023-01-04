import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type AlumniCompaniesT = {
  _key: string;
  name: string;
  picture: SanityImageObject;
};

export type AlumniCompaniesFetchT = Array<{
  _id: string;
  companies: Array<AlumniCompaniesT>;
}>;

export type AlumniCompaniesP = {
  companies: Array<AlumniCompaniesT>;
};
