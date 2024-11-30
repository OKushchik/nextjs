import React, {FC} from 'react';
import styles from './style.module.scss'
import Button from "@/components/ui/Button/Button";
import {EButtonType} from "@/model/enums";

interface IProps {
  title: string;
  children: React.ReactNode;
  onSubmit: ()=>void;
  onCancel: ()=>void;
}

const ModalCreate:FC<IProps> = ({title, onSubmit, onCancel, children}) => {
  return (
    <div className={styles.modalCreate}>
      <p className={styles.modalCreate__title}>{title}</p>
      <div className={styles.modalCreate__content}>
        {children}
      </div>
      <div className={styles.modalCreate__buttons}>
        <Button typeBtn={EButtonType.PREMIUM} onClick={onSubmit}>Ok</Button>
        <Button typeBtn={EButtonType.SECONDARY} onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
};

export default ModalCreate;