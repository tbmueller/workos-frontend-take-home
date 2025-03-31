import { Table } from "@radix-ui/themes";
import { Role } from "../../../types/entities";
import { defaultString, lastUpdatedTime } from "../util";
import { PaddedTextCell } from "../../table/padded-text-cell";

export const RoleRow = ({ role }: { role: Role}) => {
    return (
        <Table.Row>
            <PaddedTextCell>{role.name}</PaddedTextCell>
            <PaddedTextCell>{role.description ?? ""}</PaddedTextCell>
            <PaddedTextCell>{defaultString(role)}</PaddedTextCell>
            <PaddedTextCell>{lastUpdatedTime(role)}</PaddedTextCell>
        </Table.Row>
    );
};