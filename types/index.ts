import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist';

export * from './social-media';
export * from './alumni-companies';
export * from './accordion-item';
export * from './course-card';
export * from './gallery-block';

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

export interface ImagesListItem {
  caption: string;
  description: string;
  url: string;
  altImg: string;
  _key: string;
}

interface PosterListItem {
  caption: string;
  attribution: string;
  url: string;
}

export interface MerchGeneralT extends Base, Link {
  howItWorks: Array<ImagesListItem>;
  imagesList: Array<PosterListItem>;
  general_info: {
    title: string;
    description: string;
    titleLink: string;
  };
}

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
  content: MDXRemoteSerializeResult;
  title: MDXRemoteSerializeResult;
};
