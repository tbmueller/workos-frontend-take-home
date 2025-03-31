import { Table } from "@radix-ui/themes"
import { useContext, useMemo } from "react";
import { RolesContext } from "../roles-context";
import { RoleRow } from "./role-row";

export const RolesTable = () => {
    const roles = useContext(RolesContext);
    const roleRows = useMemo(() => roles?.map((r) => <RoleRow key={r.id} role={r} />), [roles]);

    return (
        <Table.Root variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Default?</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Last updated</Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {roleRows}
            </Table.Body>
        </Table.Root>
    );
}