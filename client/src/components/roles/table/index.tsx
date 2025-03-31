import { Table } from "@radix-ui/themes"
import { useContext, useMemo } from "react";
import { RolesContext } from "../roles-context";
import { RoleRow } from "./role-row";
import { CellPadding } from "../../table/cell-padding";

export const RolesTable = () => {
    const roles = useContext(RolesContext);
    const roleRows = useMemo(() => roles?.map((r) => <RoleRow key={r.id} role={r} />), [roles]);

    return (
        <Table.Root variant="surface">
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>
                        <CellPadding>Role</CellPadding>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                        <CellPadding>Description</CellPadding>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                        <CellPadding>Default?</CellPadding>
                    </Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>
                        <CellPadding>Last updated</CellPadding>
                    </Table.ColumnHeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {roleRows}
            </Table.Body>
        </Table.Root>
    );
}