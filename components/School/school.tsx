import Link from 'next/link';
import { FC, useMemo } from 'react';
import styles from './styles.module.scss';
import { CourseCard } from '@/types';
import CourseList from './ui/CourseList/course-list';

type Props = {
  courses: CourseCard[];
  limit: number;
};

const School: FC<Props> = ({ courses, limit }) => {
  const sorted = useMemo(
    () =>
      [...courses]
        .sort(
          (a, b) =>
            new Date(a.starting_date).valueOf() -
            new Date(b.starting_date).valueOf()
        )
        .slice(0, limit),
    [courses]
  );

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.edu}>EDUCATION</p>
          <h1 className={styles.heading}>Study with RS School</h1>

          <div className={styles.aboutWrapper}>
            <p className={styles.about}>
              RS School is a free and community-based online education program
              conducted by The Rolling Scopes Community since 2013.
            </p>
            <p className={styles.about}>
              Currently 500+ developers from different countries and companies
              involve in the education procces as mentors
            </p>
          </div>

          <button className={styles.button}>
            <Link href="/">Go to RS School</Link>
          </button>
        </div>

        <div className={styles.cards}>
          <CourseList courses={sorted || []} />

          <div className={styles.linkWrapper}>
            <Link href="/" className={styles.link}>
              All courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default School;
