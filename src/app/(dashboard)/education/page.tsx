import styles from './style.module.scss'
import DropDown from "@/components/ui/DropDown/DropDown";
import {education} from "@/dt";
import Link from "next/link";
export default function EducationPage() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Education</h2>
      {
        education && <ul className={styles.dropDownList}>
          {
            education.map((item) => {

              return <DropDown key={item.id} title={item.title}>
                {
                  item.links.map((link) => {
                    return <li className={styles.dropDownItem} key={link.id}>
                      <h2 className={styles.dropDownItemTitle}>{link.linkTitle}</h2>
                      <p className={styles.dropDownItemDescription}>{link.description}</p>
                      <Link className={styles.dropDownItemLink} href={link.link}>{link.link}</Link>
                    </li>
                  })
                }
              </DropDown>
            })
          }
        </ul>
      }
    </div>
);
}
