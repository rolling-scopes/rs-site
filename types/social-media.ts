import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type SocialMediaItemT = {
  _key: string;
  name: string;
  icon: SanityImageObject;
  item_chanel_list: Array<{
    _key: string;
    channel_name: string;
    channel_link: string;
    channel_country_members: string;
    channel_description: string;
  }>;
};

export type SocialMediaListT = {
  _id: string;
  social_media_list: Array<SocialMediaItemT>;
};

export type SocialIconT = {
  name: string;
  icon: SanityImageObject;
};

export type SocialNetworkingListT = SocialMediaListT;
