import { FC, useState, useRef } from 'react';
import cn from 'classnames';
import { MDXRemote } from 'next-mdx-remote';
import type { AccordionItem as AccordionItemType } from 'types';
import styles from './styles.module.scss';
import { styledTags } from '../styled-tags';

const AccordionItem: FC<AccordionItemType> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const itemStyles = cn(styles.accordionItem, {
    [styles.withPadding]: isOpen
  });

  const titleIconStyles = cn(styles.plus, {
    [styles.rotatePlus]: isOpen
  });

  const contentStyles = isOpen
    ? { height: ref.current?.scrollHeight ?? 0 }
    : { height: 0 };

  function accordionItemHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <li className={itemStyles}>
      <div className={styles.accordionItemTitle} onClick={accordionItemHandler}>
        {title && <MDXRemote {...title} components={styledTags} />}
        <span className={titleIconStyles} />
      </div>

      <div
        ref={ref}
        style={contentStyles}
        className={styles.accordionItemContent}
      >
        {content && <MDXRemote {...content} components={styledTags} />}
      </div>
    </li>
  );
};

export default AccordionItem;
