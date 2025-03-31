import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { DropdownMenu, IconButton } from "@radix-ui/themes";
import { useContext } from "react";
import { UserContext } from "./contexts/user-context";
import { SetUsersContext } from "./contexts/set-users-context";

export const Dropdown = () => {
    const user = useContext(UserContext);
    const setUsers = useContext(SetUsersContext);
    if (user == null || setUsers == null) {
        return null;
    }

    const clickHandler = () => {
        setUsers((existing) => existing.filter((u) => u.id !== user.id));
    };

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <IconButton variant="ghost" color="gray" radius="full">
                    <DotsHorizontalIcon />
                </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
                <DropdownMenu.Item onClick={clickHandler}>
                    Delete user
                </DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}