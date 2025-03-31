import { Table, Text } from "@radix-ui/themes";
import { useMemo } from "react";
import { UserRow } from "../user-row";
import { User } from "../../../types/entities";
import { CellPadding } from "../../table/cell-padding";

export const UserTable = ({ users }: { users: User[] }) => {
    const rows = useMemo(() => (users.map((u: User) => <UserRow key={u.id} user={u} />)), [users]);

    return (
        <Table.Root variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>
                        <CellPadding>
                            <Text size="2">
                                User
                            </Text>
                        </CellPadding>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                        <CellPadding>
                            <Text size="2">
                                Role
                            </Text>
                        </CellPadding>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                        <CellPadding>
                            <Text size="2">
                                Joined
                            </Text>
                        </CellPadding>
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