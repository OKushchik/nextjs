'use client'
import React, {FormEvent, useState} from 'react';
import styles from './style.module.scss'
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import {EButtonType} from "@/model/enums";
import {useRouter} from "next/navigation";
import {useLoginMutation} from "@/redux/api/authApi";

const Login = () => {
  const[email,setEmail]=useState<string>('')
  const[password,setPassword]=useState<string>('')
  const router = useRouter()
  const [login] = useLoginMutation();
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    login({email,password}).then((response)=>{
      if (!response.error) {
        router.push('/home')
      }
    })
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2 className={styles.loginForm__title}>Login Form</h2>
      <Input label='Email'
             type="email"
             name="email"
             placeholder="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             className={styles.loginForm__input}
      />
      <Input label='Password'
             type="password"
             name="password"
             placeholder="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className={styles.loginForm__input}
      />

      <Button typeBtn={EButtonType.PREMIUM} style={{marginLeft: 'auto', display:'block', marginTop: '10px'}} type="submit">
        login
      </Button>

    </form>
  );
};

export default Login;