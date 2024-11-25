import {IMember} from "@/model/IMember";
import {ESocialType, EWorkStatus} from "@/model/enums";

export type TId = number | string;
export type TSocial = {type:ESocialType, href: string}
export type TWorkStatusChart = {name:EWorkStatus, value: number, color: string}
export type TTechnologiesChart = {name:string, value: number}
export type TTableMember = Pick<IMember, 'id' |'name' | 'surname' | 'skills' |'position'>;
export type TFormNewMember = Pick<IMember, 'name' | 'surname' | 'skills' |'position'>;
export type TTableList = TTableMember;
export type TFilteredOptions =  'skills' | 'status';
