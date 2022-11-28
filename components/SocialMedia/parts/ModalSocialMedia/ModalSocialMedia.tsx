import React, { CSSProperties, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

import { urlForImage } from '@/lib/sanity';

import { SocialIconT, SocialMediaItemT } from 'types';

import styles from './styles.module.scss';

interface Props {
  modalItem: SocialMediaItemT | null;
  setModal: Dispatch<SetStateAction<SocialMediaItemT>>;
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

const ModalSocialMedia: React.FC<Props> = props => {
  const { modalItem, setModal } = props || {};

  if (!modalItem) return null;

  const onCloseModal = () => setModal(null);

  const setGridColumns = (): CSSProperties => {
    const quantityItems = modalItem.item_chanel_list.length;

    let gridTemplateColumns = 'repeat(4,232px)';

    if (quantityItems <= 2) {
      gridTemplateColumns = 'repeat(2,302px)';
    } else if (quantityItems <= 3) {
      gridTemplateColumns = 'repeat(3,302px)';
    }

    return { gridTemplateColumns };
  };

  return (
    <div
      className={styles.modalSection}
      tabIndex={-1}
      aria-hidden="true"
      onClick={onCloseModal}
    >
      <div className={styles.modalField} onClick={e => e.stopPropagation()}>
        <div className={styles.modalIconBlock}>
          <div className={styles.icon}>
            <ImageIcon icon={modalItem.icon} name={modalItem.name} />
          </div>
          <span className={styles.iconText}>{modalItem.name}</span>
        </div>
        <div className={styles.modalContent} style={setGridColumns()}>
          {modalItem.item_chanel_list.map((item, index) => (
            <div className={styles.modalContentItem} key={index}>
              <a
                href={item.channel_link ?? ''}
                target={'_blank'}
                className={styles.socialBtn}
                rel="noreferrer"
              >
                <p className={styles.name}>{item.channel_name}</p>
              </a>
              <p className={styles.members}>
                {item.channel_country_members} подписчиков
              </p>
              <p className={styles.description}>
                {item.channel_description.length > 70
                  ? `${item.channel_description.substring(0, 70)} ...`
                  : item.channel_description}
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

export default ModalSocialMedia;
