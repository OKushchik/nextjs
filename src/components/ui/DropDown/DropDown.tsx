'use client'
import React, {FC, useState} from 'react';
import styles from './style.module.scss'
import {FaArrowDown} from "react-icons/fa";

interface IProps {
  title: string;
  children: React.ReactNode;
}

const DropDown: FC<IProps> = ({title, children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={styles.dropDownWrapper}>
      <div className={styles.dropDownButton} onClick={() => setIsOpen((prev) => !prev)}>
        {title}<FaArrowDown className={isOpen ? styles.arrow : styles.arrowRotated}/>
      </div>
      {
        isOpen &&
        <div className={styles.dropDownContent}>
          {children}
        </div>
      }
    </div>
  );
};


export default DropDown;