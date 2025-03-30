import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../queries/fetch-users";
import { UserTable } from "./user-table";

export const UsersDataTable = ({search}: {search: string}) => {
    const { data } = useQuery({
        queryKey: ["users", { search }],
        queryFn: fetchUsers,
    });

    if (data == null) {
        return "No users found"
    }

    const { data: users } = data;

    return <UserTable users={users} />;
}