import styles from '@/components/MerchGeneral/Merch/GeneralInfo/styles.module.scss';

export const HowItWorks = ({ howItWorks }) => {
  const elems = howItWorks.map(item => (
      // eslint-disable-next-line no-underscore-dangle
    <section className={styles.block} key={item._key}>
      <div className={styles.container}>
        <h1 className={styles.title}>{item.caption}</h1>
        <span className={styles.description}>{item.description}</span>
      </div>
    </section>
  ));
  return <>{elems}</>;
};
