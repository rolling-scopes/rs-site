import Link from 'next/link';
import { DonationV1T } from 'types';
import styles from './styles.module.scss';

type Props = {
  donation: DonationV1T;
};

export default function DonationV1({ donation }: Props) {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.title}>{donation.title}</h1>
        <span className={styles.description}>{donation.description}</span>
        <Link href={donation.link}>
          <a className={styles.link}>{donation.titleLink}</a>
        </Link>
      </div>
    </section>
  );
}
