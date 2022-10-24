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

export type SocialNetworkingListT = Array<SocialNetworkingItemT>;
