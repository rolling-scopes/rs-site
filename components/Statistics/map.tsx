import type { HTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';
import map from './world-map.svg?url';

type MapProps = HTMLAttributes<HTMLElement> & { children: ReactNode };

export const Map = (props: MapProps) => (
  <div
    className="relative w-full"
    style={{ aspectRatio: `${map.width} / ${map.height}` }}
  >
    <Image
      {...map}
      className="w-full absolute inset-0"
      alt="World Map"
      draggable={false}
    />
    {props.children}
  </div>
);
