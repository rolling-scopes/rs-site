import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import { SocialIconT, SocialNetworkingItemT, SocialTypeStateT } from 'types';

import styles from './styles.module.scss';

interface Props {
  openModalItem: SocialNetworkingItemT | null;
  setSocialListState: Dispatch<SetStateAction<SocialTypeStateT>>;
}

const ImageIcon = ({ icon, name }: SocialIconT) => (
  <Image
    src={urlForImage(icon.asset._ref).height(101).width(101).url()}
    height={101}
    width={101}
    alt={name}
    priority
  />
);

const ModalSocialNetworking: React.FC<Props> = props => {
  const { openModalItem, setSocialListState } = props;

  if (!openModalItem) return null;

  const onCloseModal = () =>
    setSocialListState(prevState => ({ ...prevState, openModalItem: null }));

  return (
    <div className={styles.modalSection} tabIndex={-1} aria-hidden="true">
      <div className={styles.modalField}>
        <div className={styles.modalIconBlock}>
          <div className={styles.icon}>
            <ImageIcon icon={openModalItem.icon} name={openModalItem.name} />
          </div>
          <span className={styles.iconText}>{openModalItem.name}</span>
        </div>
        <div className={styles.modalContentSection}>
          {openModalItem.social_item_link.map((item, index) => (
            <div className={styles.modalContentItem} key={index}>
              <a
                href={item.link}
                target={'_blank'}
                className={styles.socialBtn}
                rel="noreferrer"
              >
                <span className={styles.modalContentTitle}>{item.name}</span>
              </a>
              <p className={styles.modalContentDescription}>
                Lorem ipsum dolor sit amet
              </p>
            </div>
          ))}
        </div>
        <button className={styles.btnClose} onClick={onCloseModal}>
          <Image
            src={`/images/icon/btn-close.svg`}
            height={16}
            width={16}
            alt={'Close'}
          />
        </button>
      </div>
    </div>
  );
};

export default ModalSocialNetworking;
