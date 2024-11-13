"use client"
import Table from "@/components/ui/Table/Table";
import MemberCard from "@/components/MemberCard/MemberCard";
import {TId, TTableMember} from "@/model/Types";
import React, {useState} from "react";
import {members} from "@/dt";
import {IMember} from "@/model/IMember";
import Input from "@/components/ui/Input/Input";
import {useSearch} from "@/hooks/useSearch";


export default function MembersPage() {
  const [selectedUserId, setSelectedId] = useState<TId>(1)
  const [result, text, setSearchText] = useSearch<IMember>(members)

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
    <div className="flex">
      <div className="flex-auto">
        <div className='mt-[50px] mr-[50px] ml-auto w-fit'>
          <Input type="text"
                 placeholder="Search"
                 value={text}
                 onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        {text}
        <Table list={result} tableColumns={tableColumns} handleClick={(id)=>setSelectedId(id)}/>
      </div>
      <div className="basis-[300px]">
        <MemberCard member={members.find(member => member.id === selectedUserId)}/>
      </div>
    </div>
  );
}
