import Image from 'next/image';
import cn from 'classnames';
import { CourseCard as CourseCardT } from '@/types';
import MicIcon from '@/public/images/icon/mic.svg';
import CalendarIcon from '@/public/images/icon/calendar.svg';
import styles from './styles.module.scss';
import { cardData } from './card-data';

export const CourseCard = ({ course }: { course: CourseCardT }) => (
  <li className={cn(styles.card, `${styles[cardData[course.type].class]}`)}>
    <div className={styles.top}>
      <div className={styles.mode}>{course.mode}</div>
      <div className={styles.dot} />
      <div className={styles.country}>{course.country}</div>
    </div>
    <h2 className={styles.title}>{course.title}</h2>
    <div className={styles.bottom}>
      <div className={styles.date}>
        <CalendarIcon width={16} height={16} />
        <span>{course.starting_date}</span>
      </div>
      <div className={styles.language}>
        <MicIcon width={16} height={16} />
        <span>{course.language}</span>
      </div>
    </div>
    <div className={styles.icon}>
      <Image src={cardData[course.type].iconPath} fill alt="Course Icon" />
    </div>
  </li>
);
