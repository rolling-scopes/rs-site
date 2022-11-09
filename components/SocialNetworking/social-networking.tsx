import React, { useState } from 'react';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import { SocialNetworkingListT, SocialTypeStateT } from 'types';

import ModalSocialNetworking from './parts/ModalSocialNetworking';

import styles from './styles.module.scss';

type SocialNetworkingP = {
  socialList: SocialNetworkingListT;
};

const SocialNetworking: React.FC<SocialNetworkingP> = props => {
  const { socialList } = props;
  const [socialListState, setSocialListState] = useState<SocialTypeStateT>(
    socialList.map(item => ({
      ...item,
      openModal: false
    }))
  );

  const onOpenModal = (_id: string) =>
    setSocialListState([
      ...socialListState.map(item =>
        item._id === _id ? { ...item, openModal: true } : item
      )
    ]);

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>Мы в социальных сетях</h2>
      <ul className={styles.socialList}>
        {socialListState.map(item => (
          <li className={styles.socialItem} key={item._id}>
            {item.social_item_link.length > 1 ? (
              <button
                className={styles.socialBtn}
                type={'button'}
                onClick={() => onOpenModal(item._id)}
              >
                <Image
                  src={urlForImage(item.icon.asset._ref)
                    .height(24)
                    .width(24)
                    .url()}
                  height={24}
                  width={24}
                  alt={item.name}
                  loading={'lazy'}
                />
              </button>
            ) : (
              <a
                href={item.social_item_link[0].link}
                target={'_blank'}
                className={styles.socialBtn}
                rel="noreferrer"
              >
                <Image
                  src={urlForImage(item.icon.asset._ref)
                    .height(24)
                    .width(24)
                    .url()}
                  height={24}
                  width={24}
                  loading={'lazy'}
                  alt={item.name}
                />
              </a>
            )}
            <span className={styles.socialName}>{item.name}</span>
          </li>
        ))}
      </ul>
      <ModalSocialNetworking
        socialListState={socialListState}
        setSocialListState={setSocialListState}
      />
    </section>
  );
};

export default SocialNetworking;
