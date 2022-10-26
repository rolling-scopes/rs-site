import Link from 'next/link';
import { SpeakersT } from 'types';
import styles from './styles.module.scss';

type Props = {
  speaker: SpeakersT;
};

export default function Speakers({ speaker }: Props) {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <h1 className={styles.title}>{speaker.title}</h1>
        <span className={styles.description}>{speaker.description}</span>
        <Link href={speaker.link}>
          <a className={styles.link}>{speaker.titleLink}</a>
        </Link>
      </div>
    </section>
  );
}
