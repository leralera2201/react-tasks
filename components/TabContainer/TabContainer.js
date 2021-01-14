import clsx from 'clsx';
import {Button} from "reactstrap";
import {useRouter} from 'next/router';

import styles from './TabContainer.module.scss';

export default function TabContainer({ title, children, step,  }) {
  const router = useRouter();

  const navigate = (newStep) => {
    router.push(`?step=${newStep}`);
  };


  return <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.stepper}>
      <div className={step >= 1 ? clsx(styles.active, styles.active1) : ''}/>
      <div className={step >= 2 ? clsx(styles.active, styles.active2) : ''}/>
      <div className={step == 3 ? clsx(styles.active, styles.active3) : ''}/>
    </div>
    <div className={styles.container__inner}>
     {/*<FormContainer onSubmit={submit}>*/}
       {children}
     {/*</FormContainer>*/}
    </div>
    {/*<div className={clsx(styles.buttons, step === 1 && styles.buttons__right)}>*/}
    {/*  {step && step > 1 && step !== 3 && <Button*/}
    {/*    outline*/}
    {/*    color="secondary"*/}
    {/*    onClick={() => navigate(step-1)}*/}
    {/*  >*/}
    {/*    Back*/}
    {/*  </Button>}*/}
    {/*  {step && step < 3 && <Button*/}
    {/*    outline*/}
    {/*    color="info"*/}
    {/*    type="submit"*/}
    {/*    onClick={() => navigate(step+1)}*/}
    {/*  >*/}
    {/*    Next*/}
    {/*  </Button>}*/}

    {/*</div>*/}
  </div>
};
