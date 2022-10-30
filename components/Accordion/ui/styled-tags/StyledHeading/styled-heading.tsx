import { FC, HTMLAttributes } from 'react';
import styles from './styles.module.scss';

type Props = HTMLAttributes<HTMLHeadingElement>;

const StyledHeading: FC<Props> = props => (
  <h2 className={styles.heading} {...props} />
);
export default StyledHeading;
