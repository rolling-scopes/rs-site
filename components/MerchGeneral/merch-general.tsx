import Link from 'next/link';
import { MerchGeneralT } from 'types';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';

type Props = {
  merch: MerchGeneralT;
};

export default function MerchGeneral({ merch }: Props) {
  // @ts-ignore
  const { title, description, imagesList, titleLink, link } = merch || {};
  const picList = imagesList.map(item => (
    <div
      className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
      key={item.caption}
    >
      <Image
        src={urlForImage(item).url()}
        alt="donation"
        width="235"
        height="100"
        className="h-full w-full object-cover object-center"
      />
    </div>
  ));
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
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
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {picList}
                    </div>
                  </div>
                </div>
                <Link href={link ?? ''}>{titleLink}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
