import React, {FC} from 'react';
import Button from "@/components/ui/Button/Button";
import {EButtonType, ENotify} from "@/model/enums";
import styles from './style.module.scss'

interface IProps {
  message: string,
  type: ENotify,
  setIsModalOpen: (val:boolean)=>void
}
const Notification:FC<IProps> = ({message, type, setIsModalOpen}) => {
  return (
    <div className={`${styles.notification} ${ 
      type === ENotify.ERROR
        ? styles.notificationError
        : type === ENotify.WARNING
          ? styles.notificationWarning
          : type === ENotify.SUCCESS
            ? styles.notificationSuccess
            : ''
    }`}>
      <Button typeBtn={EButtonType.SECONDARY} onClick={() => setIsModalOpen(false)} className={styles.closeBtn}>x</Button>
      {message}
    </div>
  );
};

export default Notification;