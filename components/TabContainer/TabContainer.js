import clsx from 'clsx';

import styles from './TabContainer.module.scss';

const TabContainer = ({ title, children, step }) => (
  <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.stepper}>
      <div className={step >= 1 ? clsx(styles.active, styles.active1) : ''}/>
      <div className={step >= 2 ? clsx(styles.active, styles.active2) : ''}/>
      <div className={step == 3 ? clsx(styles.active, styles.active3) : ''}/>
    </div>
    <div className={styles.container__inner}>
       {children}
    </div>
  </div>
);

export default TabContainer;