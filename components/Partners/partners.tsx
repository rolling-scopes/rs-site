import { urlForImage } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import { PartnersT } from 'types';
import styles from './styles.module.scss';

type Props = {
  partners: PartnersT;
};

export default function Partners({ partners }: Props) {
  const { title, companies } = partners || {};

  const companiesComponent = companies?.map(company => {
    const imageUrl = company.picture?.asset?._ref
      ? urlForImage(company.picture).url()
      : 'https://source.unsplash.com/630x441/';
    return (
      <Link
        key={company.name}
        href={company.link ?? ''}
        className={styles.link}
      >
        <Image src={imageUrl} width={174} height={62} alt={company.name} />
      </Link>
    );
  });
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.companies}>{companiesComponent}</div>
      </div>
    </section>
  );
}
