import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SocialNetworkingItemT = {
  _id: string;
  name: string;
  icon: SanityImageObject;
  social_item_link: Array<{
    _id: string;
    name: string;
    link: string;
  }>;
};

export type SocialTypeStateT = Array<
  SocialNetworkingItemT & { openModal: boolean }
>;

export type SocialNetworkingListT = Array<SocialNetworkingItemT>;
