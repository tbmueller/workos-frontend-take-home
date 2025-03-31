import { ApiResponse } from "../types/api";
import { Role } from "../types/entities";


export const fetchRoles = async (): Promise<ApiResponse<Role[]>> => {
    const response = await fetch("http://localhost:3002/roles");
    if (!response.ok) {
      throw new Error('Failed to fetch roles');
    }
    return response.json();
};
