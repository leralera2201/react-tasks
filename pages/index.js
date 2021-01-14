import Head from 'next/head'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.scss'
import StartStepper from "../components/StartStepper";
import FirstFormPage from "../components/FirstFormPage";
import SecondFormPage from "../components/SecondFormPage";
import ThirdFormPage from "../components/ThirdFormPage";

export default function Home() {
  const router = useRouter();
  const { query: { step } } = router;

  const nextPage = () => {
    router.push(`?step=${+step + 1}`);
  }

  const previousPage = () => {
    router.push(`?step=${+step - 1}`);
  }

  const onSubmit = (values) => {
    console.log(values)
  }

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
}
