import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../queries/fetch-users";
import { UserTable } from ".";
import { useState } from "react";
import { SetUsersContext } from "../contexts/set-users-context";
import { Skeleton } from "../../table/skeleton";
import { EmptyState } from "./empty-state";

export const UsersDataTable = ({search}: {search: string}) => {
    const { data, isLoading } = useQuery({
        queryKey: ["users", { search }],
        queryFn: fetchUsers,
    });

    const userData = data == null ? [] : data.data;
    const [users, setUsers] = useState(userData);
    console.log(userData)
    console.log(users)
    
    if (isLoading) {
        return <Skeleton />;
    }
    
    if (userData == null || userData.length === 0) {
        return <EmptyState />;
    }


    return (
        <SetUsersContext value={setUsers}>
            <UserTable users={userData} />
        </SetUsersContext>
    );
}