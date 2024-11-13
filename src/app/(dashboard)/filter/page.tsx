'use client'
import styles from './style.module.scss'
import {members, skills, status} from "@/dt";
import SelectComponent from "@/components/ui/SelectComponent/Select";
import React, {useEffect, useState} from "react";
import { MultiValue } from 'react-select';
import {IOption} from "@/model/IOption";
import Table from "@/components/ui/Table/Table";
import {useSearch} from "@/hooks/useSearch";
import {IMember} from "@/model/IMember";
import {TFilteredOptions, TTableMember} from "@/model/Types";
import Input from "@/components/ui/Input/Input";
import { useRouter } from 'next/navigation'

export default function FilterPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [result, text, setSearchText] = useSearch<IMember>(members)
  const [selectedSkills, setSelectedSkills] = useState<MultiValue<IOption>|null>(null)
  const [selectedStatus, setSelectedStatus] = useState<MultiValue<IOption>|null>(null)
  const [filtered, setFiltered] = useState<IMember[]>(result)

  const router = useRouter()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let updatedFiltered = result;

    if (selectedSkills && selectedSkills.length > 0) {
      updatedFiltered = filteredFunc(updatedFiltered, 'mainSkills', selectedSkills);
    }

    if (selectedStatus && selectedStatus.length > 0) {
      updatedFiltered = filteredFunc(updatedFiltered, 'status', selectedStatus);
    }

    setFiltered(updatedFiltered);
  }, [result, selectedSkills, selectedStatus]);

  const filteredFunc = (
    data: IMember[],
    option: TFilteredOptions,
    optionFilter: MultiValue<IOption>
  ) => {
    return data.filter((item) => {
      const itemValue = item[option] || [];
      if(itemValue) {
        return optionFilter.every((opt) => itemValue.includes(opt.value));
      }
    });
  };

  const tableColumns: { label: string; property: keyof TTableMember }[] = [
    {
      label: 'ID',
      property: 'id'
    },
    {
      label: 'Name',
      property: 'name'
    },
    {
      label: 'Surname',
      property: 'surname'
    },
    {
      label: 'Skills',
      property: 'mainSkills'
    },
    {
      label: 'Position',
      property: 'position'
    }
  ]

  return (
    <div >
      {
        isMounted && <div>
        <div className={styles.filterContainer}>
          <SelectComponent data={skills} onChange={(val) => setSelectedSkills(val)}/>
          <SelectComponent data={status} onChange={(val) => setSelectedStatus(val)}/>
          <Input type="text"
                 placeholder="Search"
                 value={text}
                 onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
          <Table list={filtered} tableColumns={tableColumns} handleClick={(id)=>router.push(`/members/${id}`)}/>
        </div>
      }
    </div>
  );
}
