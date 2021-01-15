import { useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';

import StartStepper from '../components/StartStepper';
import FirstFormPage from '../components/FirstFormPage';
import SecondFormPage from '../components/SecondFormPage';
import ThirdFormPage from '../components/ThirdFormPage';
import styles from '../styles/Home.module.scss'

const Home = () => {
  const router = useRouter();
  const [readOnly, setReadOnly] = useState(false);
  const { query: { step } } = router;

  const nextPage = () => {
    router.push(`?step=${+step + 1}`);
  };

  const previousPage = () => {
    router.push(`?step=${+step - 1}`);
    setReadOnly(true);
  };

  const onSubmit = (values) => {
    Object.entries(values)
      .forEach(([fieldName, field]) =>
        console.log(`${fieldName}: ${field}`));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Stepper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!step && <StartStepper /> }
      {step && step == 1 && <FirstFormPage onSubmit={nextPage} readOnly={readOnly}/>}
      {step && step == 2 && <SecondFormPage onSubmit={nextPage} previousPage={previousPage} />}
      {step && step == 3 && <ThirdFormPage onSubmit={onSubmit} />}
    </div>
  )
};

export default Home;
