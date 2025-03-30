import { Table } from "@radix-ui/themes"
import { User } from "../../types/entities";
import { UserContext } from "./user-context";
import { PhotoNameCell } from "./photo-name-cell";

export const UserRow = ({ user }: { user: User }) => {
    return (
        <UserContext value={user}>
            <Table.Row key={user.id}>
                <Table.Cell>
                    <PhotoNameCell />
                </Table.Cell>
                <Table.Cell>

                </Table.Cell>
                <Table.Cell>

                </Table.Cell>
            </Table.Row>
        </UserContext>
    );
}