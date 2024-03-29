import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { urlForImage } from '@/lib/sanity';
import { AlumniCompaniesT, AlumniCompaniesP } from '@/types';
import { onUpdateCompaniesList } from './utils';

import styles from './styles.module.scss';

const AlumniCompanies: React.FC<AlumniCompaniesP> = props => {
  const { companies } = props || {};

  const visiblyItemsQty = useMemo(() => 6, []);
  const timeoutUpdateItemsMs = useMemo(() => 10000, []);
  const timeoutTransition = useMemo(
    () => ({ enter: 1200, exit: 1200, appear: 1000 }),
    []
  );
  const styleTransition = useMemo(
    () => ({
      enter: styles.itemEnter,
      enterActive: styles.itemEnterActive,
      exit: styles.itemExit,
      exitDone: styles.itemExitActive
    }),
    []
  );

  const [companiesList, setCompaniesList] = useState<AlumniCompaniesT[]>(
    companies.slice(0, visiblyItemsQty)
  );

  useEffect(() => {
    const interval = setInterval(
      () =>
        onUpdateCompaniesList({
          arrayCompanies: companies,
          companiesList,
          setCompaniesList,
          visiblyItemsQty
        }),
      timeoutUpdateItemsMs
    );

    return () => clearInterval(interval);
  }, [companies, companiesList, timeoutUpdateItemsMs, visiblyItemsQty]);

  return (
    <div className={styles.field}>
      <h3 className={styles.title}>We are proud of our alumni</h3>
      <p className={styles.text}>
        We are immensely proud of RS School alumni who build their successful
        carriers in ambitious IT companies
      </p>
      <div className={styles.imagesSection}>
        {companiesList.map(({ name, picture, _key: key }, index) => (
          <SwitchTransition mode={'out-in'} key={index}>
            <CSSTransition
              key={key}
              unmountOnExit
              timeout={timeoutTransition}
              classNames={styleTransition}
            >
              <div className={styles.wrapper}>
                <Image
                  src={urlForImage(picture.asset._ref)
                    .width(144)
                    .height(40)
                    .url()}
                  width={144}
                  height={40}
                  alt={name}
                  key={key}
                  priority
                />
                <div className={styles.cursor} />
              </div>
            </CSSTransition>
          </SwitchTransition>
        ))}
      </div>
    </div>
  );
};

export default AlumniCompanies;
