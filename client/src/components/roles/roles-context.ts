import { createContext } from "react";
import { Role } from "../../types/entities";

export const RolesContext = createContext<Role[]|undefined>(undefined);
