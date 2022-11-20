import Link from 'next/link';
import { MerchGeneralT } from 'types';
import styles from './styles.module.scss';

type Props = {
  merch: MerchGeneralT;
};

export default function MerchGeneral({ merch }: Props) {
  const { title, description, link, titleLink } = merch || {};
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.description}>{description}</span>
        <Link href={link ?? ''} className={styles.link}>
          {titleLink}
        </Link>
      </div>
    </section>
  );
}
