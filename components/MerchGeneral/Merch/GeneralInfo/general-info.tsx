import Link from 'next/link';
import styles from './styles.module.scss';

export const GeneralInfo = ({ merch: { description, title, titleLink } }) => (
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
