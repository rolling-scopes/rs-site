import { FC, useState, useRef } from 'react';
import cn from 'classnames';
import { MDXRemote } from 'next-mdx-remote';
import type { AccordionItem as AccordionItemType } from '@/components/Accordion/model/types';
import styles from './styles.module.scss';
import { styledTags } from '../styled-tags';

const AccordionItem: FC<AccordionItemType> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>();

  function accordionItemHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <li
      className={cn(styles.accordionItem, {
        [styles.withPadding]: isOpen
      })}
    >
      <div className={styles.accordionItemTitle} onClick={accordionItemHandler}>
        {title && <MDXRemote {...title} components={styledTags} />}
        <span
          className={cn(styles.plus, {
            [styles.rotatePlus]: isOpen
          })}
        />
      </div>

      <div
        ref={ref}
        style={
          isOpen ? { height: ref.current.scrollHeight } : { height: '0px' }
        }
        className={cn(styles.accordionItemContent)}
      >
        {content && <MDXRemote {...content} components={styledTags} />}
      </div>
    </li>
  );
};

export default AccordionItem;
