import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';
import { DonationV2T } from 'types';
import styles from './styles.module.scss';

type Props = {
  donation: DonationV2T;
};

export default function DonationV2({ donation }: Props) {
  const { picture, title, description, link, titleLink } = donation || {};
  const imageUrl = picture?.asset?._ref
    ? urlForImage(picture).url()
    : 'https://source.unsplash.com/630x441/';
  return (
    <section>
      <div className={styles.block}>
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={imageUrl} layout="fill" alt="donation" />
          </div>

          <div className={styles.right}>
            <p className={styles.description}>{description}</p>

            <Link href={link ?? ''} className={styles.link}>
              {titleLink}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
