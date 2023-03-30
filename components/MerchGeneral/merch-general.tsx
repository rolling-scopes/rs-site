import type { FC } from 'react';
import Link from 'next/link';
import { MerchGeneralT } from 'types';
import { urlForImage } from '@/lib/sanity';
import Image from 'next/image';

type MerchGeneralProps = {
  merch: MerchGeneralT;
};

export const MerchGeneral: FC<MerchGeneralProps> = ({
  merch: { description, title, titleLink, imagesList }
}) => {
  const getImagesList = images =>
    images?.map(image => {
      const { caption } = image;
      return (
        <div
          className="h-64 w-44 relative overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
          key={caption}
        >
          <Image
            src={urlForImage(image).url()}
            alt={caption}
            fill
            className="h-full w-full object-cover object-center"
          />
        </div>
      );
    });

  const getImageBlock = images => (
    <div className="grid flex-shrink-0 grid-cols-1 gap-y-3 lg:gap-y-4">
      {getImagesList(images)}
    </div>
  );

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="text-sm text-gray-500 mb-4">MERCH</div>
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-gray-500">{description}</p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {imagesList && getImageBlock([imagesList[0], imagesList[1]])}
                    {imagesList && getImageBlock([
                      imagesList[3],
                      imagesList[2],
                      imagesList[4]
                    ])}
                    {imagesList && getImageBlock([
                      imagesList[5],
                      imagesList[6],
                      imagesList[7]
                    ])}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href={'/merch/'}
              className="inline-block rounded-md border border-transparent bg-night-900 py-3 px-8 text-center font-medium text-white hover:bg-zinc-400"
            >
              {titleLink}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
