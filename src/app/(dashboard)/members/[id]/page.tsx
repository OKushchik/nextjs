'use client'
import React from 'react';
import {useParams} from "next/navigation";
import styles from './style.module.scss'
import {members} from "@/dt";
import {IMember} from "@/model/IMember";
import Image from "next/image";
import SocialLinks from "@/components/SocialsLink/SocialLinks";



const Member = () => {
  const {id} = useParams()
  const member = members.find((member:IMember)=>member.id === Number(id))

  return (
    member && (
      <div className={styles.memberPage}>
        <div className={styles.memberBlock}>
          <Image className={styles.memberBlock__image} src={member.image} width={300} height={300} alt="photo"/>
          <div
            className={`${styles.memberBlock__name} status status--${member.status}`}>{member.name} {member.surname}</div>
          <p className={styles.memberBlock__position}>{member.position}</p>
          {
            member.socials && <SocialLinks socials={member.socials}/>
          }
        </div>
        <div className={styles.memberBlock}>
          <h2 className={styles.memberBlock__resumeTitle}>Resume</h2>
          {
            member.cv && <div>
              <div className={styles.memberBlock__resume}>
                <p>{member.cv.technicalExpertise}</p>
                <p>{member.cv.toolsAndFrameworks}</p>
                <p>{member.cv.communication}</p>
                <p>{member.cv.projects}</p>
              </div>
            </div>
          }
        </div>
      </div>

    )
  );
};

        export default Member;