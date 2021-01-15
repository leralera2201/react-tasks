import { useRouter } from 'next/router';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

import StartStepper from '../components/StartStepper';
import FirstFormPage from '../components/FirstFormPage';
import SecondFormPage from '../components/SecondFormPage';
import ThirdFormPage from '../components/ThirdFormPage';
import styles from '../styles/Home.module.scss';
import { completeFirstStep } from '../components/FirstFormPage/actions/firstFormPage.actions';
import { completeSecondStep } from '../components/SecondFormPage/actions/secondFormPage.actions';

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { query: { step } } = router;

  const nextPage = () => {
    if(step == 1) {
      dispatch(completeFirstStep());
    }else if(step == 2) {
      dispatch(completeSecondStep());
    }

    router.push(`?step=${+step + 1}`);
  };

  const previousPage = () => {
    router.push(`?step=${+step - 1}`);
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
      {step && step == 1 && <FirstFormPage onSubmit={nextPage} />}
      {step && step == 2 && <SecondFormPage onSubmit={nextPage} previousPage={previousPage} />}
      {step && step == 3 && <ThirdFormPage onSubmit={onSubmit} />}
    </div>
  )
};

export default Home;
