import { Table } from "@radix-ui/themes";
import { Role } from "../../../types/entities";
import { defaultString, lastUpdatedTime } from "../util";
import { PaddedTextCell } from "../../table/padded-text-cell";

export const RoleRow = ({ role }: { role: Role}) => {
    return (
        <Table.Row>
            <Table.Cell>{role.name}</Table.Cell>
            <Table.Cell>{role.description ?? ""}</Table.Cell>
            <PaddedTextCell>{defaultString(role)}</PaddedTextCell>
            <PaddedTextCell>{lastUpdatedTime(role)}</PaddedTextCell>
        </Table.Row>
    );
};