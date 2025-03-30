import { useState } from "react";
import { UsersDataTable } from "./users-data-table";

export const Users = () => {
    const [search, setSearch] = useState("");

    return (
        <>
            <input value={search} onChange={(e) => setSearch(e.currentTarget.value)}></input>
            <UsersDataTable search={search} />
        </>
    );
}
