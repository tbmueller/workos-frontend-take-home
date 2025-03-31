import { Table } from "@radix-ui/themes"
import { User } from "../../types/entities";
import { UserContext } from "./user-context";
import { PhotoNameCell } from "./photo-name-cell";
import { userJoinDate, useUserRole } from "./util";
import { PaddedTextCell } from "../table/padded-text-cell";
import { PaddedCell } from "../table/padded-cell";
import { Dropdown } from "./dropdown";
import { useState } from "react";

export const UserRow = ({ user }: { user: User }) => {
    const joinDate = userJoinDate(user);
    const role = useUserRole(user);

    const [deleteInProgress, setDeleteInProgress] = useState(false);
    const dropdownProps = { deleteInProgress, setDeleteInProgress };

    return (
        <UserContext value={user}>
            <Table.Row style={{opacity: deleteInProgress ? 0.5 : 1 }} key={user.id} align="center">
                <Table.Cell>
                    <PhotoNameCell />
                </Table.Cell>
                <PaddedTextCell>
                    {role}
                </PaddedTextCell>
                <PaddedTextCell>
                    {joinDate}
                </PaddedTextCell>
                <PaddedCell>
                    <Dropdown {...dropdownProps} />
                </PaddedCell>
            </Table.Row>
        </UserContext>
    );
}
