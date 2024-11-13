import React from 'react';

import styles from './style.module.scss'
import Image from "next/image";


const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={'/cms-logo.png'} alt="logo" width={100} height={32} />
      <div className={styles.user}>
        <p className={styles.userName}>Oksana</p>
      </div>
    </header>
  );
};

export default Header;