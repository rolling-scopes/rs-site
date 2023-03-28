import { FC } from 'react';
import type { AccordionItem as AccordionItemType } from 'types';
import styles from './styles.module.scss';
import { AccordionItem } from './ui/AccordionItem';

type Props = {
  posts: AccordionItemType[];
  limit?: number;
};

const Accordion: FC<Props> = ({ posts, limit }) => {
  const slicedPosts = posts.slice(0, limit);

  return (
    <ul className={styles.accordion}>
      {slicedPosts.map((post, index) => (
        <AccordionItem title={post.title} content={post.content} key={index} />
      ))}
    </ul>
  );
};

export default Accordion;
