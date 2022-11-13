import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { MDXRemoteSerializeResult } from 'next-mdx-remote/dist';

export type SocialNetworkingItemT = {
  _id: string;
  social_item_link: Array<{
    _id: string;
    name: string;
    link: string;
    country: string;
  }>;
  social_name: string;
};

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

export interface DonationV2T extends Base, Link {
  picture: SanityImageObject;
}

export interface CommunityT extends Base {
  picture: SanityImageObject;
}

export type SocialNetworkingListT = Array<SocialNetworkingItemT>;

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
