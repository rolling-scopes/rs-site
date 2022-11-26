import { AnchorHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss';

type Props = AnchorHTMLAttributes<HTMLAnchorElement>;

const StyledAnchor: FC<Props> = props => (
  <a className={styles.anchor} {...props} />
);

export default StyledAnchor;
