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

export type SocialTypeStateT = {
  items: ReadonlyArray<SocialNetworkingItemT>;
  openModalItem: SocialNetworkingItemT | null;
};

export type SocialIconT = {
  name: string;
  icon: SanityImageObject;
};

export type SocialNetworkingListT = Array<SocialNetworkingItemT>;
