import Image from 'next/image';
import { urlForImage } from '@/lib/sanity';
import { CommunityT } from 'types';
import styles from './styles.module.scss';

type Props = {
  community: CommunityT;
};

export default function Community({ community }: Props) {
  const { picture, title, description } = community || {};
  const imageUrl = picture?.asset?._ref
    ? urlForImage(picture).url()
    : 'https://source.unsplash.com/630x441/';
  return (
    <section>
      <div className={styles.block}>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image src={imageUrl} fill alt="community" />
          </div>

          <div className={styles.right}>
            <h1 className={styles.title}>{title}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: description }}
              className={styles.description}
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
}
