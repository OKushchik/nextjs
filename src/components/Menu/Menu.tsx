import React from 'react';
import Link from 'next/link';
import Image from "next/image";

import styles from './style.module.scss'
import {IMenu} from "@/model/IMenu";

const menuItems = [
  {
    icon: "/home.png",
    label: "Home",
    href: "/home",
    visible: ["admin", "user"],
  },
  {
    icon: "/student.png",
    label: "Members",
    href: "/members",
    visible: ["admin", "user"],
  },
  {
    icon: "/announcement.png",
    label: "Announcement",
    href: "/announcement",
    visible: ["admin", "user"],
  },
  {
    icon: "/teacher.png",
    label: "Education",
    href: "/education",
    visible: ["admin", "user"],
  },
  {
    icon: "/filter.png",
    label: "Filter",
    href: "/filter",
    visible: ["admin"],
  },
  {
    icon: "/setting.png",
    label: "Settings",
    href: "/settings",
    visible: ["admin","user"],
  }
];

const Menu = () => {
  return (
    <div className={styles.menu}>
      {
        menuItems.map((item:IMenu)=>{
          return (
            <Link
              key={item.label}
              href={item.href}
              className={styles.menu__item}
            >
              <Image src={item.icon} alt="logo" width={32} height={32} />
              <span>{item.label}</span>
            </Link>
          )
        })
      }
    </div>
  );
};

export default Menu;