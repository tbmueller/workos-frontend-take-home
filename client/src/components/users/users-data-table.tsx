import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../queries/fetch-users";
import { UserTable } from "./user-table";
import { useState } from "react";
import { SetUsersContext } from "./contexts/set-users-context";
import { Skeleton } from "../table/skeleton";

export const UsersDataTable = ({search}: {search: string}) => {
    const { data, isLoading } = useQuery({
        queryKey: ["users", { search }],
        queryFn: fetchUsers,
    });
    
    const userData = data == null ? [] : data.data;
    const [users, setUsers] = useState(userData);
    
    if (userData == null) {
        return "No users found"
    }

    if (isLoading) {
        return <Skeleton />;
    }

    if (users.length === 0 && userData.length > 0) {
        setUsers(userData);
    }

    return (
        <SetUsersContext value={setUsers}>
            <UserTable users={users} />
        </SetUsersContext>
    );
}