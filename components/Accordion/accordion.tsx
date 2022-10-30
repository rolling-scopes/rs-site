import { FC } from 'react';
import type { AccordionItem as AccordionItemType } from './model/types';
import styles from './styles.module.scss';
import { AccordionItem } from './ui/AccordionItem';

type Props = {
  posts: AccordionItemType[];
  length?: number;
};

const Accordion: FC<Props> = ({ posts, length }) => {
  const slicedPosts = posts.slice(0, length);

  return (
    <ul className={styles.accordion}>
      {slicedPosts.map((post, idx) => (
        <AccordionItem title={post.title} content={post.content} key={idx} />
      ))}
    </ul>
  );
};

export default Accordion;
