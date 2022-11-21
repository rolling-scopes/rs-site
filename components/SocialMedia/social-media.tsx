import React, { useState } from 'react';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import { SocialIconT, SocialMediaItemT } from 'types';

import ModalSocialMedia from './parts/ModalSocialMedia';

import styles from './styles.module.scss';

type SocialMediaP = {
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

const SocialMedia: React.FC<SocialMediaP> = props => {
  const { socialList } = props || {};
  const [modal, setModal] = useState<SocialMediaItemT | null>(null);
  const onOpenModal = (item: SocialMediaItemT) => setModal(item);

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>Мы в социальных сетях</h2>
      <ul className={styles.socialList}>
        {socialList.map(item => (
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
                href={item.item_chanel_list[0].channel_link ?? ''}
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
      <ModalSocialMedia modalItem={modal} setModal={setModal} />
    </section>
  );
};

export default SocialMedia;
