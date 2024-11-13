import {IMember} from "@/model/IMember";
import {TTableMember} from "@/model/Types";

export const filteredMembers = (data: IMember[], text: string, fields: (keyof TTableMember)[]) => {
  return data.filter((obj) =>
    fields.some((field) =>
      obj[field]?.toString().toLowerCase().includes(text.toLowerCase())
    )
  );
};