'use client'
import React, {FC} from 'react';
import {IOption} from "@/model/IOption";
import Select, { Props, GroupBase } from 'react-select'

interface IProps extends Props<IOption, true, GroupBase<IOption>> {
  data: string[];
}
const SelectComponent:FC<IProps> = ({data, ...props}) => {
  const formatedData = data.map((val) => {
    return {
      label: val,
      value: val
    }
  })

  return (
    <Select
      isMulti
      name="colors"
      options={formatedData}
      className="basic-multi-select"
      classNamePrefix="select"
      {...props}
    />
  );
};

export default SelectComponent;