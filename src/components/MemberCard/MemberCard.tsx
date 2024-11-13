import React, {FC} from 'react';
import styles from "./style.module.scss"
import { IMember } from "@/model/IMember";
import Image from "next/image";
import Link from "next/link";
import {EButtonType, ERole} from "@/model/enums";
import Button from "@/components/ui/Button/Button";
import {role} from "@/dt";
import SocialLinks from "@/components/SocialsLink/SocialLinks";

interface IProps {
  member: IMember | undefined
}

const MemberCard:FC<IProps> = ({member}) => {
  if (!member) {
    return <div>No Members</div>;
  }

  return (
    <div className={styles.card}>
      <Image className={styles.card__image} src={member.image} width={150} height={150} alt="photo"/>
      <p className={styles.card__name}>{member.name} {member?.surname}</p>
      {
        member.position && <p className={styles.card__position}>{member.position}</p>
      }

      {
        member.socials && <SocialLinks socials={member.socials} />
      }

      {
        member.mainSkills && <div className={styles.card__skills}><span><b>Skills:</b></span> {member.mainSkills?.join(',')}</div>
      }

      {
        member.experience && <div className={styles.card__experience}><span><b>Experience:</b></span> {member.experience}+ {+member.experience > 1 ? "years" : "year" }</div>
      }

      {
        role === ERole.ADMIN && <Link className={styles.card__more} href={`/members/${member.id}`}>
          <Button type={EButtonType.SECONDARY}>View Profile</Button>
        </Link>
      }

    </div>
  );
};

export default MemberCard;