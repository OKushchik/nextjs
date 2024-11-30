'use client'
import React, {FormEvent, useState} from 'react';
import styles from './style.module.scss'
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import {EButtonType, ENotify} from "@/model/enums";
import {useRouter} from "next/navigation";
import {useLoginMutation} from "@/redux/api/authApi";
import ErrorNotification from "@/components/Notification/Notification";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {AuthResponse} from "@/model/IAuth";

// type MyError = FetchBaseQueryError;
interface ApiError {
  data?: AuthResponse;
  error?: FetchBaseQueryError;
}

const Login = () => {
  const[email,setEmail]=useState<string>('')
  const[password,setPassword]=useState<string>('')
  const router = useRouter()
  const [login, { error }] = useLoginMutation<ApiError>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const showModal = (duration: number) => {
    setIsModalOpen(true);
    setTimeout(() => setIsModalOpen(false), duration);
  };
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string


    login({email,password}).then((response)=>{
      if (response.data) {
        router.push('/')
      }
      if (response.error) {
        showModal(3000)
      }
    })
  }

  return (
    <div className={styles.loginWrapper}>
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

        <Button typeBtn={EButtonType.PREMIUM} style={{marginLeft: 'auto', display: 'block', marginTop: '10px'}}
                type="submit">
          login
        </Button>

      </form>

      {
        isModalOpen && <ErrorNotification message={typeof error?.data === 'string' ? error.data : 'An error occurred'} type={ENotify.ERROR} setIsModalOpen={setIsModalOpen}/>
      }
    </div>
  )
    ;
};

export default Login;