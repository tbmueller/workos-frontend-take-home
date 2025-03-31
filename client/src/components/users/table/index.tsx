import { Table, Text } from "@radix-ui/themes";
import { useMemo } from "react";
import { UserRow } from "../user-row";
import { User } from "../../../types/entities";

export const UserTable = ({ users }: { users: User[] }) => {
    const rows = useMemo(() => (users.map((u: User) => <UserRow key={u.id} user={u} />)), [users]);

    return (
        <Table.Root variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>
                        <Text size="2">
                            User
                        </Text>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                        <Text size="2">
                            Role
                        </Text>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                        <Text size="2">
                            Joined
                        </Text>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {rows}
            </Table.Body>
        </Table.Root>
    );
};