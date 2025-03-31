import { Table } from "@radix-ui/themes"
import { User } from "../../types/entities";
import { UserContext } from "./contexts/user-context";
import { PhotoNameCell } from "./photo-name-cell";
import { userJoinDate, useUserRole } from "./util";
import { PaddedTextCell } from "../table/padded-text-cell";
import { PaddedCell } from "../table/padded-cell";
import { Dropdown } from "./dropdown";

export const UserRow = ({ user }: { user: User }) => {
    const joinDate = userJoinDate(user);
    const role = useUserRole(user);

    return (
        <UserContext value={user}>
            <Table.Row key={user.id} align="center">
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
                    <Dropdown />
                </PaddedCell>
            </Table.Row>
        </UserContext>
    );
}
