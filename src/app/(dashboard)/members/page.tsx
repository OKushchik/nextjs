"use client"
import Table from "@/components/ui/Table/Table";
import MemberCard from "@/components/MemberCard/MemberCard";
import {TFormNewMember, TId, TTableMember} from "@/model/Types";
import React, {useState} from "react";
import {members, positions, skills} from "@/dt";
import {IMember} from "@/model/IMember";
import Input from "@/components/ui/Input/Input";
import {useSearch} from "@/hooks/useSearch";
import Button from "@/components/ui/Button/Button";
import {EButtonType, EPosition} from "@/model/enums";
import SelectComponent from "@/components/ui/SelectComponent/SelectComponent";
import ModalCreate from "@/components/ModalCreate/ModalCreate";
import {IOption} from "@/model/IOption";
import {SingleValue} from "react-select";

const initFormMemberObj = {
  name: '',
  surname: '',
  skills: [],
  position: EPosition.FE
}


export default function MembersPage() {
  const [selectedUserId, setSelectedId] = useState<TId>(1)
  const [result, text, setSearchText] = useSearch<IMember>(members)
  const [form, setForm] = useState<TFormNewMember>(initFormMemberObj)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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
      property: 'skills'
    },
    {
      label: 'Position',
      property: 'position'
    }
  ]

  const saveMember =()=>{
    console.log(form)
  }

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
        <Button typeBtn={EButtonType.SECONDARY} onClick={()=>setIsModalOpen((prev)=>!prev)}>Create new member</Button>
        {
          isModalOpen && <ModalCreate title={"Create Member"} onSubmit={saveMember} onCancel={()=>setIsModalOpen((prev)=>!prev)}>
            <form style={{maxWidth: '400px'}}>
              <Input type="text"
                     label="Name"
                     placeholder="Name"
                     value={form?.name}
                     onChange={(e) =>
                       setForm((prev) => ({
                         ...prev,
                         name: e.target.value
                       }))
                     }
              />
              <Input type="text"
                     label="Surname"
                     placeholder="Surname"
                     value={form?.surname}
                     onChange={(e) =>
                       setForm((prev) => ({
                         ...prev,
                         surname: e.target.value
                       }))
                     }
              />
              <SelectComponent
                data={skills}
                label="Skills"
                isMulti={true}
                onChange={(val) => {
                    setForm((prev) => ({
                      ...prev,
                      skills: Array.isArray(val) ? val.map(item => item.value) : [''],
                    }));
                }}
              />
              <SelectComponent
                data={positions}
                label="Position"
                onChange={(val) => {
                    setForm((prev) => ({
                      ...prev,
                      position: val as SingleValue<IOption> ? val?.label : '',
                    }));
                }}
              />
            </form>
          </ModalCreate>
        }

      </div>
      <div className="basis-[300px]">
        <MemberCard member={members.find(member => member.id === selectedUserId)}/>
      </div>
    </div>
  );
}
