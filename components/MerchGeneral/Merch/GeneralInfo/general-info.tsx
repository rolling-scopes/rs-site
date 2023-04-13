import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface GeneralInfoProps {
  merch: {
    description: ReactNode;
    title: ReactNode;
    titleLink: ReactNode;
  };
}

export const GeneralInfo = ({
  merch: { description, title, titleLink }
}: GeneralInfoProps) => (
  <section className={styles.block}>
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.description}>{description}</span>
      <Link href={''} className={styles.link}>
        {titleLink}
      </Link>
    </div>
  </section>
);
