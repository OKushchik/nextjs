'use client'
import React from 'react';

import styles from './style.module.scss'
import Image from "next/image";
import Link from "next/link";
import {useLogoutMutation} from "@/redux/api/authApi";


const Header = () => {
  const [logout] = useLogoutMutation()
  const logOut =()=>{
    logout()
  }

  return (
    <header className={styles.header}>
      <Image src={'/cms-logo.png'} alt="logo" width={100} height={32} />
      <div className={styles.user}>
        <p className={styles.userName}>Oksana</p>
        <Link className={styles.logOut} href={'/'} onClick={logOut}>Log out</Link>
      </div>
    </header>
  );
};

export default Header;