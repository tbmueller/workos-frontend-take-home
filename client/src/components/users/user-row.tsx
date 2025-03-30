import { Table } from "@radix-ui/themes"
import { User } from "../../types/entities";

export const UserRow = ({ user }: { user: User }) => {
    return <Table.Row key={user.id}>
        <Table.Cell>
            {`${user}`}
        </Table.Cell>
    </Table.Row>;
}