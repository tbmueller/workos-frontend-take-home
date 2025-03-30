import { useState } from "react";
import { UsersDataTable } from "./users-data-table";
import { Button, Flex, TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";

export const Users = () => {
    const [search, setSearch] = useState("");

    return (
        <>
            <Flex gap="2">
                <Flex asChild flexGrow="1">
                    <TextField.Root placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.currentTarget.value)}>
                        <TextField.Slot>
                            <MagnifyingGlassIcon />
                        </TextField.Slot>
                    </TextField.Root>
                </Flex>
                <Button>
                    <PlusIcon />
                    Add user
                </Button>
            </Flex>
            <UsersDataTable search={search} />
        </>
    );
}
