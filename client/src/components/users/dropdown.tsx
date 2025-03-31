import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { ReactNode, useContext, useState } from "react";
import { UserContext } from "./contexts/user-context";
import { SetUsersContext } from "./contexts/set-users-context";
import { useDeleteUser } from "../../queries/use-delete-user";

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
            <DropdownMenu.Item key="delete" onClick={clickHandler}>
                Delete user
            </DropdownMenu.Item>
        );
    };

    return (
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
    );
}