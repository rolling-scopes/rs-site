import { SanityImageObject } from '@sanity/image-url/lib/types/types';

export type GalleryBlockDataT = {
  _id: string;
  title: string;
  images: Array<SanityImageObject & { _key: string }>;
};

export type GalleryBlockFetchT = Array<GalleryBlockDataT>;

export type GalleryBlockP = {
  data: GalleryBlockDataT;
};
