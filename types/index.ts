import { SanityImageObject } from '@sanity/image-url/lib/types/types';

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

export type SocialNetworkingListT = Array<SocialNetworkingItemT>;
