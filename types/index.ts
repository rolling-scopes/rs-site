import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist';

export * from './social-media';
export * from './alumni-companies';

type Link = {
  titleLink: string;
  link: string;
};

type Base = {
  title: string;
  description: string;
};

export type SpeakersT = Base & Link;

export type DonationV1T = Base & Link;

export type MerchGeneralT = Base & Link;

export type PartnersT = {
  title: string;
  companies: {
    name: string;
    link: string;
    picture: SanityImageObject;
  }[];
};

export interface DonationV2T extends Base, Link {
  picture: SanityImageObject;
}

export interface CommunityT extends Base {
  picture: SanityImageObject;
}

export type AccordionItem = {
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  title: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
};
