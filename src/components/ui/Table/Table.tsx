'use client'
import React, {FC, useState} from 'react';
import styles from "./style.module.scss"
import {TId, TTableList} from "@/model/Types";


interface IProps<T> {
  list: T[];
  tableColumns: { label: string; property: keyof T }[]
  handleClick?: (id: TId)=>void
}


const Table: FC<IProps<TTableList>> = ({list, tableColumns, handleClick}) => {
  const [selectedFieldId, setSelectedFieldId] = useState<number>(1)

  const handleClickOnRow =(id: number)=> {
    if(handleClick) {
      handleClick(id)
    }
    setSelectedFieldId(id)
  }

  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
      <tr>
        {
          tableColumns.map((column)=> {
            return (<th key={column.label} className={styles.table__cell}>{column.label}</th>)
          })
        }
      </tr>
      </thead>
      <tbody>
      {list.map((member) => (
        <tr className={`${styles.table__row} ${selectedFieldId === member.id ? styles.active : ''}`} key={member.id} onClick={()=>handleClickOnRow(member.id)}>
          {
            tableColumns.map((column)=> (
              <td key={column.label} className={styles.table__cell}>
                {
                  Array.isArray(member[column.property])
                    ? (member[column.property] as string[]).join(', ')
                    : member[column.property] ?? ''
                }
              </td>
            ))
          }
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;