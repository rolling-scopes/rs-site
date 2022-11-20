import React, { useState } from 'react';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import { SocialTypeStateT, SocialIconT, SocialMediaItemT } from 'types';

import ModalSocialNetworking from './parts/ModalSocialNetworking';

import styles from './styles.module.scss';

type SocialNetworkingP = {
  socialList: Array<SocialMediaItemT>;
};

const ImageIcon = ({ icon, name }: SocialIconT) => (
  <Image
    src={urlForImage(icon.asset._ref).height(24).width(24).url()}
    height={24}
    width={24}
    alt={name}
  />
);

const SocialNetworking: React.FC<SocialNetworkingP> = props => {
  const { socialList } = props;

  const [socialState, setSocialState] = useState<SocialTypeStateT>({
    openModalItem: null,
    items: socialList
  });

  const onOpenModal = (item: SocialMediaItemT) =>
    setSocialState(prevState => ({ ...prevState, openModalItem: item }));

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>Мы в социальных сетях</h2>
      <ul className={styles.socialList}>
        {socialState.items.map(item => (
          <li className={styles.socialItem} key={item.name}>
            {item.item_chanel_list.length > 1 ? (
              <button
                className={styles.socialBtn}
                type={'button'}
                onClick={() => onOpenModal(item)}
              >
                <ImageIcon icon={item.icon} name={item.name} />
              </button>
            ) : (
              <a
                href={item.item_chanel_list[0].channel_link}
                target={'_blank'}
                className={styles.socialBtn}
                rel="noreferrer"
              >
                <ImageIcon icon={item.icon} name={item.name} />
              </a>
            )}
            <span className={styles.socialName}>{item.name}</span>
          </li>
        ))}
      </ul>
      <ModalSocialNetworking
        openModalItem={socialState.openModalItem}
        setSocialListState={setSocialState}
      />
    </section>
  );
};

export default SocialNetworking;
