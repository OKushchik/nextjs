import React, {FC} from 'react';
import styles from './style.module.scss'
import {EButtonType} from "@/model/enums";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeBtn: EButtonType;
  children: React.ReactNode;
}

const Button:FC<IProps> = ({ typeBtn, children, ...props })=> {
  return (
    <button
      className={`${styles.button} ${
        typeBtn === EButtonType.PREMIUM
          ? styles.buttonPremium
          : typeBtn === EButtonType.SECONDARY
            ? styles.buttonSecondary
            : typeBtn === EButtonType.DISABLE
              ? styles.buttonDisable
              : ''
      }`} disabled={typeBtn === EButtonType.DISABLE}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;