import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';
import { SocialTypeStateT } from 'types';

import styles from './styles.module.scss';

interface Props {
  socialListState: SocialTypeStateT;
  setSocialListState: Dispatch<SetStateAction<SocialTypeStateT>>;
}

const ModalSocialNetworking: React.FC<Props> = props => {
  const { socialListState, setSocialListState } = props;

  const onCloseModal = () =>
    setSocialListState(prevState =>
      prevState.map(item => ({ ...item, openModal: false }))
    );

  const styleModal = (_id: string) =>
    `${styles.modalSection} ${
      socialListState.find(item => item._id === _id).openModal &&
      styles.openModal
    }`;

  const openModalItem = socialListState.find(item => item.openModal);

  return (
    <div className={styles.content}>
      {openModalItem && (
        <div
          className={styleModal(openModalItem._id)}
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className={styles.modalField}>
            <div className={styles.modalIconBlock}>
              <div className={styles.icon}>
                <Image
                  src={urlForImage(openModalItem.icon.asset._ref)
                    .height(101)
                    .width(101)
                    .url()}
                  height={101}
                  width={101}
                  loading={'eager'}
                  alt={openModalItem.name}
                />
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
                    <p className={styles.modalContentTitle}>{item.name}</p>
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
      )}
    </div>
  );
};

export default ModalSocialNetworking;
