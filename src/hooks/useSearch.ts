import { filteredMembers } from "@/utils/filteredMembers";
import {useState} from "react";
import {IMember} from "@/model/IMember";


export const useSearch = <T extends IMember>(data: T[]) => {
  const [result, setResult] = useState<T[]>(data);
  const [text, setText] = useState<string>('');
  const setSearchText = (text: string) => {
    const filteredTable = filteredMembers(data, text, ['name', 'surname', 'position', 'skills']) as T[];
    setResult(filteredTable);
    setText(text);
  };
  return [result, text, setSearchText, setResult] as const;
};