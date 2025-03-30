import { Table, IconButton } from "@radix-ui/themes"
import { User } from "../../types/entities";
import { UserContext } from "./user-context";
import { PhotoNameCell } from "./photo-name-cell";
import { userJoinDate, useUserRole } from "./util";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { SimpleTextCell } from "../table/simple-text-cell";
import { SimpleCell } from "../table/simple-text-cell copy";

export const UserRow = ({ user }: { user: User }) => {
    const joinDate = userJoinDate(user);
    const role = useUserRole(user);

    return (
        <UserContext value={user}>
            <Table.Row key={user.id} align="center">
                <Table.Cell>
                    <PhotoNameCell />
                </Table.Cell>
                <SimpleTextCell>
                    {role}
                </SimpleTextCell>
                <SimpleTextCell>
                    {joinDate}
                </SimpleTextCell>
                <SimpleCell>
                    <IconButton variant="ghost" color="gray">
                        <DotsHorizontalIcon />
                    </IconButton>
                </SimpleCell>
            </Table.Row>
        </UserContext>
    );
}
