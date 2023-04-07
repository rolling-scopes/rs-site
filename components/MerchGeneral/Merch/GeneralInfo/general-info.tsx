import Link from 'next/link';
import styles from './styles.module.scss';

export const GeneralInfo = () => (
  <section className={styles.block}>
    <div className={styles.container}>
      <h1 className={styles.title}>The Rolling Scopes Merch</h1>
      <span className={styles.description}>
        Download free and use our assets for printing your own Rolling Scopes
        merch
      </span>
      <Link href={''} className={styles.link}>
        Browse catalog
      </Link>
    </div>
  </section>
);
