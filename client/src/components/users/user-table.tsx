import { Table } from "@radix-ui/themes";
import { useMemo } from "react";
import { UserRow } from "./user-row";

export const UserTable = ({ users }: { users: unknown[] }) => {

    const rows = useMemo(() => (users.map((u) => <UserRow user={u} />)), [users]);

    return (
        <Table.Root>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Joined</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table.Root>
    );
};