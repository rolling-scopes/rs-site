import { urlForImage } from '@/lib/sanity';
import Image from 'next/image';
import { ImagesListItem } from '@/types';

export const HowItWorks = ({
  images,
  title
}: {
  images: ImagesListItem[];
  title: string;
}) => (
  <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">
        {title}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {images?.map(item => (
          // eslint-disable-next-line no-underscore-dangle
          <div key={item._key} className="group relative">
            <div className="mt-4 flex flex-col  justify-between">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                  src={urlForImage(item).url()}
                  alt={item.altImg}
                  fill
                  className="h-full w-full object-center group-hover:opacity-75"
                />
              </div>
              <h2 className="text-center font-bold">{item.caption}</h2>
              <p className="text-sm font-medium text-night-700 mt-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
