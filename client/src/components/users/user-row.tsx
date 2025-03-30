import { Table, Text, Flex, IconButton } from "@radix-ui/themes"
import { User } from "../../types/entities";
import { UserContext } from "./user-context";
import { PhotoNameCell } from "./photo-name-cell";
import { userJoinDate, useUserRole } from "./util";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export const UserRow = ({ user }: { user: User }) => {
    const joinDate = userJoinDate(user);
    const role = useUserRole(user);

    return (
        <UserContext value={user}>
            <Table.Row key={user.id} align="center">
                <Table.Cell>
                    <PhotoNameCell />
                </Table.Cell>
                <Table.Cell>
                    <Flex align="center">
                        <Text size="2">
                            {role}
                        </Text>
                    </Flex>
                </Table.Cell>
                <Table.Cell>
                    <Text size="2">
                        {joinDate}
                    </Text>
                </Table.Cell>
                <Table.Cell>
                    <IconButton variant="ghost" color="gray">
                        <DotsHorizontalIcon />
                    </IconButton>
                </Table.Cell>
            </Table.Row>
        </UserContext>
    );
}
