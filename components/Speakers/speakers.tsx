import Link from 'next/link';
import { SpeakersT } from 'types';
import styles from './styles.module.scss';

type Props = {
  speaker: SpeakersT;
};

export default function Speakers({ speaker }: Props) {
  const { title, description, link, titleLink } = speaker || {};
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.description}>{description}</span>
        <Link href={link}>
          <a className={styles.link}>{titleLink}</a>
        </Link>
      </div>
    </section>
  );
}
