import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type Props = {
  link: string;
};

const FAQ: FC<PropsWithChildren<Props>> = ({ children, link }) => (
  <section className={styles.wrapper}>
    <div className={styles.faq}>
      <h2 className={styles.header}>Частые вопросы и ответы</h2>
      <main className={styles.accordion}>{children}</main>
      <Link href={link}>
        <a className={styles.link}>
          <span className={styles.text}>Смотреть больше ...</span>
        </a>
      </Link>
    </div>
  </section>
);

export default FAQ;
