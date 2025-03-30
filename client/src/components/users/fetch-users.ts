import { ApiResponse } from "../../types/api";
import { User } from "../../types/entities";

export const fetchUsers = async ({ queryKey }: { queryKey: [string, { search?: string }] }): Promise<ApiResponse<User[]>> => {
  const [_key, { search }] = queryKey;
  const url = new URL("http://localhost:3002/users");

  if (search) {
    url.searchParams.append("search", search);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};
