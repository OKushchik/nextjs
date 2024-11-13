import React, {FC, InputHTMLAttributes} from 'react';
import styles from './style.module.scss'
import {EButtonType} from "@/model/enums";

interface IProps extends InputHTMLAttributes<HTMLButtonElement> {
  type: EButtonType;
  children: React.ReactNode;
}

const Button:FC<IProps> = ({ type, children, ...props })=> {
  return (
    <button
      className={`${styles.button} ${
        type === EButtonType.PREMIUM
          ? styles.buttonPremium
          : type === EButtonType.SECONDARY
            ? styles.buttonSecondary
            : type === EButtonType.DISABLE
              ? styles.buttonDisable
              : ''
      }`} disabled={type === EButtonType.DISABLE}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;