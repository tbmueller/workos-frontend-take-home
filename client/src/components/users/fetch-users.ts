import { ApiResponse } from "../../types/api";
import { User } from "../../types/entities";

export const fetchUsers = async (): Promise<ApiResponse<User[]>> => {
    const response = await fetch("http://localhost:3002/users");
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
};
