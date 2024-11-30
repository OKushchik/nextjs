import React, {FC} from 'react';
import styles from "./style.module.scss";
import Image from "next/image";

interface IProps {
  image: string;
  date: string;
  title: string;
  description: string;
}
const Announce:FC<IProps> = ({image,date,title,description}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image src={image} width={500} height={500} alt={'banner'}/>
      </div>

      <p className={styles.cardDate}>{date}</p>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default Announce;