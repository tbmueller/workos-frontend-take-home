import { ApiResponse } from "../types/api";
import { User } from "../types/entities";

export const deleteUser = async (id: string): Promise<ApiResponse<User>> => {
  const url = new URL(`http://localhost:3002/users/${id}`);

  const response = await fetch(url, { method: "DELETE" });

  if (!response.ok) {
    throw new Error(`Failed to delete user "${id}"`);
  }

  return response.json();
};
