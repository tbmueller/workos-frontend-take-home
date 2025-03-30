import { Table } from "@radix-ui/themes"

export const UserRow = ({ user }: { user: unknown }) => {
    return <Table.Row>
        {`${user}`}
    </Table.Row>;
}