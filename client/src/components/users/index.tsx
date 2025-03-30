import { use } from "react";
import { UserTable } from "./user-table";
import { fetchUsers } from "./fetch-users";

const userPromise = fetchUsers();

export const Users = () => {
    const { data: users } = use(userPromise);
    return <UserTable users={users} />
}
