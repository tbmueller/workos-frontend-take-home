import { Table } from "@radix-ui/themes";
import { Role } from "../../../types/entities";
import { defaultString, lastUpdatedTime } from "../util";
import { SimpleTextCell } from "../../table/simple-text-cell";

export const RoleRow = ({ role }: { role: Role}) => {
    return (
        <Table.Row>
            <Table.Cell>{role.name}</Table.Cell>
            <Table.Cell>{role.description ?? ""}</Table.Cell>
            <SimpleTextCell>{defaultString(role)}</SimpleTextCell>
            <SimpleTextCell>{lastUpdatedTime(role)}</SimpleTextCell>
        </Table.Row>
    );
};