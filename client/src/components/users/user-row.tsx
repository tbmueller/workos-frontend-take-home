import { Table } from "@radix-ui/themes"
import { User } from "../../types/entities";
import { UserContext } from "./user-context";
import { PhotoNameCell } from "./photo-name-cell";
import { userJoinDate, useUserRole } from "./util";

export const UserRow = ({ user }: { user: User }) => {
    const joinDate = userJoinDate(user);
    const role = useUserRole(user);

    return (
        <UserContext value={user}>
            <Table.Row key={user.id}>
                <Table.Cell>
                    <PhotoNameCell />
                </Table.Cell>
                <Table.Cell>
                    {role}
                </Table.Cell>
                <Table.Cell>
                    {joinDate}
                </Table.Cell>
            </Table.Row>
        </UserContext>
    );
}
