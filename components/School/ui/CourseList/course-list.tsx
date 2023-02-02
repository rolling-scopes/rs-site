import { FC } from 'react';
import { CourseCard as CourseCardT } from '@/types';
import CourseCard from '../CourseCard/course-card';
import styles from './styles.module.scss';

type Props = {
  courses: CourseCardT[];
};

const CourseList: FC<Props> = ({ courses }) => (
  <ul className={styles.courses}>
    {courses.map((course, idx) => (
      <CourseCard course={course} key={idx} />
    ))}
  </ul>
);

export default CourseList;
