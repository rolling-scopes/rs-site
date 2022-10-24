import React, { useState } from 'react';

import { SocialNetworkingListT, SocialNetworkingItemT } from '../../types';

import styles from './styles.module.scss';

type SocialNetworkingP = {
  socialList: SocialNetworkingListT;
};

const SocialNetworking: React.FC<SocialNetworkingP> = props => {
  const { socialList } = props;
  const [state, setState] = useState<
    Array<SocialNetworkingItemT & { openModal: boolean }>
  >(
    socialList.map(item => ({
      ...item,
      openModal: false
    }))
  );

  const openModalItem = state.find(item => item.openModal);

  const onOpenModal = (_id: string) =>
    setState([
      ...state.map(item =>
        item._id === _id ? { ...item, openModal: true } : item
      )
    ]);

  const onCloseModal = () =>
    setState(prevState =>
      prevState.map(item => ({ ...item, openModal: false }))
    );

  const styleModal = (_id: string) =>
    `${styles.modalSection} ${
      state.find(item => item._id === _id).openModal && styles.openModal
    }`;

  return (
    <section className={styles.block}>
      <h2 className={styles.title}>Мы в социальных сетях</h2>
      <ul className={styles.socialList}>
        {state.map(item => (
          <li className={styles.socialItem} key={item._id}>
            <button
              className={styles.socialBtn}
              type={'button'}
              onClick={() => onOpenModal(item._id)}
            />
            <span className={styles.socialName}>{item.social_name}</span>
          </li>
        ))}
      </ul>
      {openModalItem && (
        <div
          className={styleModal(openModalItem._id)}
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className={styles.modalField}>
            <div className={styles.modalIconBlock}>
              <div className={styles.icon} />
              <span className={styles.iconText}>
                {openModalItem.social_name}
              </span>
            </div>
            <div className={styles.modalContentSection}>
              {openModalItem.social_item_link.map(link => (
                <div className={styles.modalContentItem} key={link._id}>
                  <p className={styles.modalContentTitle}>{link.name}</p>
                </div>
              ))}
            </div>
            <button className={styles.btnClose} onClick={onCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default SocialNetworking;
