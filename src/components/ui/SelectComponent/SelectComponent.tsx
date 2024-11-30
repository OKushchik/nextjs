'use client'
import React, {FC} from 'react';
import {IOption} from "@/model/IOption";
import Select, {Props, GroupBase} from 'react-select'
import styles from './style.module.scss'

interface IProps extends Props<IOption, boolean, GroupBase<IOption>> {
  data: string[];
  label?: string;
  isMulti?: true;
}
const SelectComponent:FC<IProps> = ({data, label, isMulti, ...props}) => {
  const formatedData = data.map((val) => {
    return {
      label: val,
      value: val
    }
  })

  return (
    <div className={styles.selectComponent}>
      {
        label && <p className={styles.selectComponent__label}>{label}</p>
      }

      <Select
        instanceId={label}
        isMulti={isMulti || undefined}
        name="colors"
        options={formatedData}
        className="basic-multi-select"
        classNamePrefix="select"
        {...props}
      />
    </div>

  );
};

export default SelectComponent;