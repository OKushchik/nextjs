import {IMember} from "@/model/IMember";
import {ESocialType, EWorkStatus} from "@/model/enums";

export type TId = number | string;
export type TSocial = {type:ESocialType, href: string}
export type TWorkStatusChart = {name:EWorkStatus, value: number, color: string}
export type TTechnologiesChart = {name:string, value: number}
export type TTableMember = Pick<IMember, 'id' | 'name' | 'surname' | 'mainSkills' |'position'>;
export type TTableList = TTableMember;
export type TFilteredOptions =  'mainSkills' | 'status';
