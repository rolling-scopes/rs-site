import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import styles from './styles.module.scss';

type FaqProps = {
  link: string;
  children: ReactNode;
};

export const FAQ: FC<FaqProps> = ({ children, link }) => (
  <section className={styles.wrapper}>
    <div className={styles.faq}>
      <h2 className={styles.header}>Частые вопросы и ответы</h2>
      <main className={styles.accordion}>{children}</main>
      <Link href={link} className={styles.link}>
        <span className={styles.text}>Смотреть больше ...</span>
      </Link>
    </div>
  </section>
);
