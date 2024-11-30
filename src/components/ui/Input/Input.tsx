'use client'
import React, {FC, InputHTMLAttributes} from 'react';
import styles from './style.module.scss'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  errorMessage?: string
}

const Input:FC<IProps> = ({label, errorMessage, ...props}) => {

  return (
    <div className={styles.inputBlock}>
      {label && <label className={styles.inputBlock__lable}>{label}</label>}

      <input
        className={styles.inputBlock__input}
        {...props}
      />

      {errorMessage && (
        <span className={styles.inputBlock__error}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default Input;