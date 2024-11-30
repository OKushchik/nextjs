import {TSocial} from "@/model/Types";
import {ERole, EWorkStatus, EPosition} from "@/model/enums";
export interface IMember {
  id: number;
  image: string;
  name: string;
  surname: string;
  email?: string;
  phone?: string;
  socials?: TSocial[];
  position?: EPosition;
  experience?: string;
  skills?: string[];
  role?: ERole;
  status?: EWorkStatus;
  cv?: {
    technicalExpertise: string;
    toolsAndFrameworks: string;
    communication: string;
    projects: string;
  };
}
