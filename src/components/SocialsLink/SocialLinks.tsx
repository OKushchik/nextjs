import React, {FC} from 'react';
import styles from './style.module.scss'
import {ESocialType} from "@/model/enums";
import Link from "next/link";
import {FaTelegram} from "react-icons/fa";
import {MdEmail, MdPhone} from "react-icons/md";
import {SiGooglechat} from "react-icons/si";
import {TSocial} from "@/model/Types";

interface IProps {
  socials: TSocial[]
}
const SocialLinks:FC<IProps> = ({socials}) => {
  return (
    <div className={styles.socials}>
      {
        socials.map(socialItem => {
          if (socialItem.type === ESocialType.TELEGRAM) {
            return (
              <Link href="https://t.me/kushchik" key={ESocialType.TELEGRAM}>
                <FaTelegram className={styles.telegram}/>
              </Link>
            );
          }
          if (socialItem.type === ESocialType.MAIL) {
            return (
              <Link href="mailto:okushchik@gmail.com" key={ESocialType.MAIL}>
                <MdEmail className={styles.letter}/>
              </Link>
            );
          }
          if (socialItem.type === ESocialType.PHONE) {
            return (
              <Link href='tel:+380664266500' key={ESocialType.PHONE}>
                <MdPhone className={styles.phone}/>
              </Link>
            );
          }
          if (socialItem.type === ESocialType.GOOGLECHAT) {
            return (
              <Link href='/nextjs/public' key={ESocialType.GOOGLECHAT}>
                <SiGooglechat className={styles.chat}/>
              </Link>
            );
          }
        })
      }
    </div>
  );
};

export default SocialLinks;