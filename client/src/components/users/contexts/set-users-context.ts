import { createContext } from "react";
import { User } from "../../../types/entities";

export const SetUsersContext = createContext<React.Dispatch<React.SetStateAction<User[]>>|undefined>(undefined);
