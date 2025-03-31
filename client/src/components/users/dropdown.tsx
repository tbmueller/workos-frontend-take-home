import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button, Dialog, DropdownMenu, Em, Flex, IconButton, Strong } from "@radix-ui/themes";
import { ReactNode, useContext, useState } from "react";
import { UserContext } from "./contexts/user-context";
import { SetUsersContext } from "./contexts/set-users-context";
import { useDeleteUser } from "../../queries/use-delete-user";
import { userName } from "./util";

export const Dropdown = () => {
    const user = useContext(UserContext);
    const setUsers = useContext(SetUsersContext);
    const [deleteInProgress, setDeleteInProgress] = useState(false);
    if (user == null || setUsers == null) {
        return null;
    }

    const deleteUser = useDeleteUser();

    const clickHandler = () => {
        if (!deleteInProgress) {
            setDeleteInProgress(true);
            setUsers((existing) => existing.filter((u) => u.id !== u.id));
            deleteUser.mutate(user.id);
        }
    };

    const menuItems: ReactNode[] = [
        <DropdownMenu.Item key="edit">
            Edit user
        </DropdownMenu.Item>
    ];
    if (!deleteInProgress) {
        menuItems.push(
            <Dialog.Trigger key="delete">
                <DropdownMenu.Item>
                    Delete user
                </DropdownMenu.Item>
            </Dialog.Trigger>
        );
    };

    return (
        <Dialog.Root>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <IconButton variant="ghost" color="gray" radius="full">
                        <DotsHorizontalIcon />
                    </IconButton>
                </DropdownMenu.Trigger>
                {menuItems.length > 0 &&
                    <DropdownMenu.Content>
                        {menuItems}
                    </DropdownMenu.Content>
                }
            </DropdownMenu.Root>

            <Dialog.Content>
                <Flex gap="3" px="5" direction="column">
                    <Dialog.Title>Delete user</Dialog.Title>
                    <Dialog.Description>
                        Are you sure? The user <Strong>{userName(user)}</Strong> will be permanently deleted.
                    </Dialog.Description>
                    <Flex gap="3" align="end" direction="row-reverse">
                        <Dialog.Close>
                            <Button variant="surface" color="red" onClick={clickHandler}>Delete user</Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            <Button variant="surface" color="gray">Cancel</Button>
                        </Dialog.Close>
                    </Flex>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
}