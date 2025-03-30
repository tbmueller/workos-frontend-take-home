import { use } from "react";
import { UserTable } from "./user-table";
import { fetchUsers } from "./fetch-users";

const userPromise = fetchUsers();

export const Users = () => {
    const users = use(userPromise);
    console.log(users)
    return <UserTable users={users.data} />
}
