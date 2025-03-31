import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../../queries/fetch-users";
import { UserTable } from ".";
import { Skeleton } from "../../table/skeleton";
import { EmptyState } from "./empty-state";

export const UsersDataTable = ({search}: {search: string}) => {
    const { data, isLoading } = useQuery({
        queryKey: ["users", { search }],
        queryFn: fetchUsers,
    });

    const userData = data == null ? [] : data.data;

    if (isLoading) {
        return <Skeleton />;
    }
    
    if (userData == null || userData.length === 0) {
        return <EmptyState />;
    }

    return (<UserTable users={userData} />);
}