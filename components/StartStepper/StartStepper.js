import Link from 'next/link';
import styles from "./StartStepper.module.scss";

export default function StartStepper() {
  return <>
    <div className={styles.text}>Lets the stepper begin</div>
    <Link href="/?step=1">
      <a className="text-decoration-none">
        <div className={styles.circle}>
          <div className={styles.circle__wrapper}>
            <div className={styles.circle__inner}>
              Start
            </div>
          </div>
        </div>
      </a>
    </Link>
  </>
}