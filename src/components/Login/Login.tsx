'use client'
import React, {useState} from 'react';
import styles from './style.module.scss'
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import {EButtonType} from "@/model/enums";

const Login = () => {
  const[email,setEmail]=useState<string>('')
  const[password,setPassword]=useState<string>('')

  return (
    <form className={styles.loginForm}>
      <h2 className={styles.loginForm__title}>Login Form</h2>
      <Input label='Email'
             type="text"
             placeholder="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className={styles.loginForm__input}
      />
      <Input label='Password'
             type="text"
             placeholder="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className={styles.loginForm__input}
      />

      <Button type={EButtonType.PREMIUM} style={{marginLeft: 'auto', display:'block', marginTop: '10px'}}>
        login
      </Button>

    </form>
  );
};

export default Login;