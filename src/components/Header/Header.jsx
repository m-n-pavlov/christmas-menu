import clsx from 'clsx';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import Countdown from "@/components/Countdown/Countdown.jsx";

export const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <Countdown />
        <img src={logo} alt="Christmas Menu" className={styles.logo} />
    </header>
  );
};
