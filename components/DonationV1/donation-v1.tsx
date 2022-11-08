import Link from 'next/link';
import { DonationV1T } from 'types';
import styles from './styles.module.scss';

type Props = {
  donation: DonationV1T;
};

export default function DonationV1({ donation }: Props) {
  const { title, description, link, titleLink } = donation || {};
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
